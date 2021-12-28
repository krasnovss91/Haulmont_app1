package com.company.untitled140.entity;

import com.haulmont.chile.core.annotations.NamePattern;
import com.haulmont.cuba.core.entity.StandardEntity;
import com.haulmont.cuba.core.entity.annotation.EnableRestore;
import com.haulmont.cuba.core.entity.annotation.TrackEditScreenHistory;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Table(name = "UNTITLED140_EXPENCE_ITEM")
@Entity(name = "untitled140$ExpenceItem")
@EnableRestore
@TrackEditScreenHistory
@NamePattern("%s|name")
public class ExpenceItem extends StandardEntity {

    private static final long serialVersionUID = -2530691982234495123L;

    @Column(name = "LARGE_CODE", nullable = false)
    @NotNull
    protected Integer largeCode;

    @Column(name = "CODE", nullable = false)
    @NotNull
    protected Double code;

    @Column(name = "NAME", nullable = false, length = 50)
    @NotNull
    protected String name;

    @Column(name = "DISPLAY", nullable = false, length = 50)
    @NotNull
    protected String display;
    @OneToOne(fetch = FetchType.LAZY, mappedBy = "expenceItem")
    protected Request request;
    @OneToOne(fetch = FetchType.LAZY, mappedBy = "expenceItem")
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

    public void setLargeCode(Integer largeCode) {
        this.largeCode = largeCode;
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

    public Double getCode() {
        return code;
    }

    public void setCode(Double code) {
        this.code = code;
    }

    public Integer getLargeCode() {
        return largeCode;
    }

}