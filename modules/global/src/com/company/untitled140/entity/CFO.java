package com.company.untitled140.entity;

import com.haulmont.cuba.core.entity.annotation.EnableRestore;
import com.haulmont.cuba.core.entity.annotation.TrackEditScreenHistory;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.haulmont.cuba.core.entity.StandardEntity;

@Table(name = "UNTITLED140_CFO")
@Entity(name = "untitled140$CFO")
@EnableRestore
@TrackEditScreenHistory
public class CFO extends StandardEntity {

    private static final long serialVersionUID = 4567087566630888657L;
    @Column(name = "NUMBER_OF_CFO")
    protected Integer numberOfCFO;
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

    public Integer getNumberOfCFO() {
        return numberOfCFO;
    }

    public void setNumberOfCFO(Integer numberOfCFO) {
        this.numberOfCFO = numberOfCFO;
    }
}