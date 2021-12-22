package com.company.untitled140.entity;

import com.haulmont.cuba.core.entity.annotation.EnableRestore;
import com.haulmont.cuba.core.entity.annotation.TrackEditScreenHistory;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.haulmont.cuba.core.entity.StandardEntity;

@Table(name = "UNTITLED140_TYPE_OF_PUSHCARE")
@Entity(name = "untitled140$TypeOfPushcare")
@EnableRestore
@TrackEditScreenHistory
public class TypeOfPushcare extends StandardEntity {

    private static final long serialVersionUID = -8868180460067980635L;
    @Column(name = "NAME", length = 50)
    protected String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}