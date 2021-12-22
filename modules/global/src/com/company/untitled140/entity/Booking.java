package com.company.untitled140.entity;

import com.haulmont.cuba.core.entity.annotation.EnableRestore;
import com.haulmont.cuba.core.entity.annotation.TrackEditScreenHistory;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.haulmont.cuba.core.entity.StandardEntity;

@Table(name = "UNTITLED140_BOOKING")
@Entity(name = "untitled140$Booking")
@EnableRestore
@TrackEditScreenHistory
public class Booking extends StandardEntity {

    private static final long serialVersionUID = -8718811680750614112L;
    @Column(name = "NAME", length = 50)
    protected String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}