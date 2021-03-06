/*
 * Copyright (c) 2019 LTD Haulmont Samara. All Rights Reserved.
 * Haulmont Samara proprietary and confidential.
 * Use is subject to license terms.
 */



/**
 *
 * @author pavlov
 * @version $Id$
 */
import com.haulmont.cuba.core.EntityManager
import com.haulmont.cuba.core.Persistence
import com.haulmont.cuba.core.Transaction
import com.haulmont.cuba.core.global.AppBeans
import com.haulmont.cuba.security.entity.FilterEntity

postUpdate.add({
    AppBeans.get(Persistence.class).createTransaction().execute(new Transaction.Runnable() {
        @Override
        void run(EntityManager em) {
            String conditionOld="select distinct cu.important from wf\$CardUserInfo cu where cu.card.id = {E}.id and cu.user.id =:session\$userId and cu.refreshAttachment is null and cu.deleteTs is null)"
            String conditionNew="select distinct cu.important from wf\$CardUserInfo cu where cu.card.id = {E}.id and cu.user.id =:session\$userId and cu.deleteTs is null)"
            em.createQuery("select f from sec\$Filter f").getResultList().each { FilterEntity filter ->
                String xml = filter.getXml();
                if (xml != null) {
                    xml = xml.replace(conditionOld, conditionNew)
                    filter.setXml(xml)
                }
                em.merge(filter)
            }
        }
    })
})