package com.company.untitled140.entity;

import com.haulmont.chile.core.annotations.NamePattern;
import com.haulmont.cuba.core.entity.StandardEntity;
import com.haulmont.cuba.core.entity.annotation.EnableRestore;
import com.haulmont.cuba.core.entity.annotation.TrackEditScreenHistory;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Table(name = "UNTITLED140_CFO")
@Entity(name = "untitled140$CFO")
@EnableRestore
@TrackEditScreenHistory
@NamePattern("%s|name")
public class CFO extends StandardEntity {

    private static final long serialVersionUID = 4567087566630888657L;

    @Column(name = "NUMBER_OF_CFO", nullable = false)
    @NotNull
    protected Integer numberOfCFO;

    @Column(name = "NAME", nullable = false, length = 50)
    @NotNull
    protected String name;

    @Column(name = "DISPLAY", nullable = false, length = 50)
    @NotNull
    protected String display;
    @OneToOne(fetch = FetchType.LAZY, mappedBy = "cfo")
    protected Request request;
    @OneToOne(fetch = FetchType.LAZY, mappedBy = "cfo")
    protected CfoLine cfoLine;

    public CfoLine getCfoLine() {
        return cfoLine;
    }

    public void setCfoLine(CfoLine cfoLine) {
        this.cfoLine = cfoLine;
    }

    public Request getRequest() {
        return request;
    }

    public void setRequest(Request request) {
        this.request = request;
    }

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