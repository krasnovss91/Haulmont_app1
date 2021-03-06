/*
 * Copyright (c) 2019 LTD Haulmont Samara. All Rights Reserved.
 * Haulmont Samara proprietary and confidential.
 * Use is subject to license terms.
 */


import com.haulmont.cuba.core.EntityManager
import com.haulmont.cuba.core.Persistence
import com.haulmont.cuba.core.Transaction
import com.haulmont.cuba.core.global.AppBeans
import com.haulmont.cuba.core.global.Metadata
import com.haulmont.cuba.security.app.EntityLog
import com.haulmont.thesis.core.entity.Employee
import com.haulmont.thesis.core.entity.EmployeeDepartmentPositionRelation

/**
 * @author tsarevskiy
 * @version $Id$
 */


postUpdate.add({
    EntityLog entityLog = AppBeans.get(EntityLog.NAME);
    Boolean entityLogEnable = entityLog.isEnabled();
    entityLog.setEnabled(false);
    try {
        AppBeans.get(Persistence.class).createTransaction().execute(new Transaction.Runnable() {
            @Override
            void run(EntityManager em) {
                em.createQuery("select e from df\$Employee e").setView(Employee.class, "edit").getResultList().each { Employee entity ->
                    if (entity.getEmployeeDepartmentPositionRelations().isEmpty()) {
                        EmployeeDepartmentPositionRelation employeeDepartmentPositionRelation =
                                AppBeans.get(Metadata.class).create(EmployeeDepartmentPositionRelation.class);
                        employeeDepartmentPositionRelation.setEmployee(entity);
                        employeeDepartmentPositionRelation.setMain(true);
                        em.persist(employeeDepartmentPositionRelation);
                    }
                }

            }
        })
    } finally {
        entityLog.setEnabled(entityLogEnable);
    }
})