package com.company.untitled140.core.listener;

import com.haulmont.cuba.core.EntityManager;
import com.haulmont.cuba.core.Persistence;
import org.apache.commons.lang.StringUtils;
import com.haulmont.cuba.core.listener.BeforeInsertEntityListener;
import com.haulmont.cuba.core.listener.BeforeUpdateEntityListener;

import java.util.Set;
import javax.inject.Inject;

import com.company.untitled140.entity.Request;
import org.springframework.stereotype.Component;

@Component(RequestListener.NAME)
public class RequestListener<T extends Request> implements BeforeUpdateEntityListener<T>, BeforeInsertEntityListener<T> {
    public static final String NAME = "untitled140_RequestListener";

    @Inject
    protected Persistence persistence;

    @Override
    public void onBeforeUpdate(T entity, EntityManager entityManager) {

        Set<String> fields = persistence.getTools().getDirtyFields(entity);

        if (fields.contains("number")) {
            String description = StringUtils.trimToEmpty(entity.getValue("number"));
            entity.setDescription(description);
        }
    }

    @Override
    public void onBeforeInsert(T entity, EntityManager entityManager) {
        onBeforeUpdate(entity, entityManager);
    }
}