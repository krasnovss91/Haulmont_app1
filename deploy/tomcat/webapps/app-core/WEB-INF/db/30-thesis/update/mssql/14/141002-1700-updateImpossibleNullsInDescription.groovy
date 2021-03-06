/*
 * Copyright (c) 2019 LTD Haulmont Samara. All Rights Reserved.
 * Haulmont Samara proprietary and confidential.
 * Use is subject to license terms.
 */

import com.haulmont.cuba.core.EntityManager
import com.haulmont.cuba.core.Persistence
import com.haulmont.cuba.core.Transaction
import com.haulmont.cuba.core.global.AppBeans
import com.haulmont.cuba.security.app.EntityLogAPI
import com.haulmont.thesis.core.entity.Task

import java.util.regex.Pattern

/**
 * so annoying
 *
 * @author Sergey Saiyan
 * @version $Id$
 */

postUpdate.add({
    EntityLogAPI entityLogAPI = AppBeans.get(EntityLogAPI.NAME);
    boolean enabled = entityLogAPI.enabled;
    try {
        entityLogAPI.enabled = false;
        AppBeans.get(Persistence.class).createTransaction().execute(new Transaction.Runnable() {
            @Override
            void run(EntityManager em) {
                em.createQuery("select t from tm\$Task t where t.num is null", Task.class).getResultList().each {
                    String oldDescription = it.description;
                    if (oldDescription) {
                        it.description = oldDescription.replaceAll(Pattern.quote("[null]"), "").replaceAll("null", "");
                    }
                }
            }
        })
    } finally {
        entityLogAPI.enabled = enabled;
    }
})
