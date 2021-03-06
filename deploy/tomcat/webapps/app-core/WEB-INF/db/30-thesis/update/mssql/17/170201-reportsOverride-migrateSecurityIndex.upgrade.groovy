import groovy.json.JsonSlurper
import groovy.sql.Sql
import org.apache.commons.io.IOUtils

def sql = new Sql(ds)
sql.withTransaction {
    List<ReportIdx> indexes = new ArrayList<>();
    sql.eachRow('select id, xml from REPORT_REPORT') { row ->
        if (row.xml != null) {
            String xmlString
            if (row.xml instanceof java.sql.Clob)
                xmlString = IOUtils.toString(row.xml.getAsciiStream())
            else
                xmlString = row.xml

            if (xmlString.startsWith('<')) {
                migrateIdxForXml(indexes, row.id, xmlString)
            } else {
                migrateIdxForJson(indexes, row.id, xmlString)
            }
        }
    }
    indexes.forEach { index -> updateReportFields(sql, index.id, index.roles, index.screens, index.entityTypes) }

}

def migrateIdxForJson(List<ReportIdx> indexes, Object id, String json) {
    def report = new JsonSlurper().parseText(json)

    String roles = null
    if (report.roles != null) {
        roles = buildIdx(report.roles.collect { role -> role.id })
    }

    String screens = null
    if (report.reportScreens != null) {
        screens = buildIdx(report.reportScreens.collect { screen -> screen.screenId })
    }

    String entityTypes = null
    if (report.inputParameters != null) {
        entityTypes = buildIdx(report.inputParameters.findAll { inputParameter -> isNotEmpty(inputParameter.entityMetaClass) }
                .collect { inputParameter -> inputParameter.entityMetaClass })
    }
    indexes.add(new ReportIdx(id: id, roles: roles, screens: screens, entityTypes: entityTypes))
}

def migrateIdxForXml(List<ReportIdx> indexes, Object id, String xml) {
    def report = new XmlSlurper().parseText(xml)
    String roles = null
    if (report.roles != null) {
        def roleEls = report.roles.'**'.findAll { node -> node.name() == 'com.haulmont.cuba.security.entity.Role' }
        if (roleEls != null) {
            roles = buildIdx(roleEls.collect { role -> role.id.text() })
        }
    }

    String screens = null
    if (report.reportScreens != null) {
        def screenEls = report.reportScreens.'**'.findAll { node -> node.name() == 'screen' }
        if (screenEls != null) {
            screens = buildIdx(screenEls.collect { screen -> screen.screenId.text() })
        }
    }

    String entityTypes = null
    if (report.inputParameters != null) {
        def inputParameterEls = report.inputParameters.'**'.findAll { node -> node.name() == 'parameter' }
        if (inputParameterEls != null) {
            entityTypes = buildIdx(inputParameterEls.findAll { inputParameter -> inputParameter.entityMetaClass != null && isNotEmpty(inputParameter.entityMetaClass.text()) }
                    .collect { inputParameter -> inputParameter.entityMetaClass.text() })
        }
    }
    indexes.add(new ReportIdx(id: id, roles: roles, screens: screens, entityTypes: entityTypes))
}

protected boolean isNotEmpty(String str) {
    return str != null && str.length() != 0
}

protected String buildIdx(List<String> list) {
    if (list == null) {
        return null
    }
    def idxSeparator = ","
    String result = String.join(idxSeparator, list)
    if (isNotEmpty(result)) {
        result = idxSeparator + result + idxSeparator
    }
    return result
}

protected void updateReportFields(Sql sql, Object id, String roles, String screens, String entityTypes) {
    if (isNotEmpty(roles)) {
        sql.executeUpdate "update REPORT_REPORT set ROLES_IDX = ?1 where ID = ?2", roles, id
    }
    if (isNotEmpty(screens)) {
        sql.executeUpdate "update REPORT_REPORT set SCREENS_IDX = ?1 where ID = ?2", screens, id
    }
    if (isNotEmpty(entityTypes)) {
        sql.executeUpdate "update REPORT_REPORT set INPUT_ENTITY_TYPES_IDX = ?1 where ID = ?2", entityTypes, id
    }
}

class ReportIdx {
    Object id
    String roles
    String screens
    String entityTypes
}