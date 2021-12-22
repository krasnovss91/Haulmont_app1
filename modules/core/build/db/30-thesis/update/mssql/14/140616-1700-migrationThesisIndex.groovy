/*
 * Copyright (c) 2019 LTD Haulmont Samara. All Rights Reserved.
 * Haulmont Samara proprietary and confidential.
 * Use is subject to license terms.
 */

import com.haulmont.cuba.core.global.AppBeans
import com.haulmont.thesis.core.fts.index.ThesisFtsMigrationWorker

postUpdate.add({
    AppBeans.get(ThesisFtsMigrationWorker.class).createTaskForFtsMigration();
})