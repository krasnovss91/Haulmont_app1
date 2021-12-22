package com.company.untitled140.entity;

import com.haulmont.cuba.core.entity.annotation.EnableRestore;
import com.haulmont.cuba.core.entity.annotation.TrackEditScreenHistory;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.haulmont.cuba.core.entity.StandardEntity;

@Table(name = "UNTITLED140_EXPENCE_ITEM")
@Entity(name = "untitled140$ExpenceItem")
@EnableRestore
@TrackEditScreenHistory
public class ExpenceItem extends StandardEntity {

    private static final long serialVersionUID = -2530691982234495123L;
    @Column(name = "LARGE_CODE")
    protected Integer largeCode;
    @Column(name = "CODE")
    protected Double code;
    @Column(name = "NAME", length = 50)
    protected String name;
    @Column(name = "DISPLAY", length = 50)
    protected String display;

    public String getDisplay() {
        return display;
    }

    public void setDisplay(String display) {
        this.display = display;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getCode() {
        return code;
    }

    public void setCode(Double code) {
        this.code = code;
    }

    public Integer getLargeCode() {
        return largeCode;
    }

    public void setLargeCode(Integer largeCode) {
        this.largeCode = largeCode;
    }
}