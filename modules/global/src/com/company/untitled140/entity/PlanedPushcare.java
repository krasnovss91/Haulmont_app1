package com.company.untitled140.entity;

import com.haulmont.chile.core.datatypes.impl.EnumClass;

import javax.annotation.Nullable;


public enum PlanedPushcare implements EnumClass<String> {

    YES("Да"),
    NO("Нет");

    private String id;

    PlanedPushcare(String value) {
        this.id = value;
    }

    public String getId() {
        return id;
    }

    @Nullable
    public static PlanedPushcare fromId(String id) {
        for (PlanedPushcare at : PlanedPushcare.values()) {
            if (at.getId().equals(id)) {
                return at;
            }
        }
        return null;
    }
}