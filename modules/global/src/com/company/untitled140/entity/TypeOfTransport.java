package com.company.untitled140.entity;

import com.haulmont.cuba.core.entity.annotation.EnableRestore;
import com.haulmont.cuba.core.entity.annotation.TrackEditScreenHistory;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.haulmont.cuba.core.entity.StandardEntity;

@Table(name = "UNTITLED140_TYPE_OF_TRANSPORT")
@Entity(name = "untitled140$TypeOfTransport")
@EnableRestore
@TrackEditScreenHistory
public class TypeOfTransport extends StandardEntity {

    private static final long serialVersionUID = 350142246329442445L;
    @Column(name = "NAME", length = 50)
    protected String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}