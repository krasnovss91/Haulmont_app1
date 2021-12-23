package com.company.untitled140.entity;

import com.haulmont.cuba.core.entity.StandardEntity;
import com.haulmont.cuba.core.entity.annotation.EnableRestore;
import com.haulmont.cuba.core.entity.annotation.TrackEditScreenHistory;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Table(name = "UNTITLED140_TYPE_OF_TRANSPORT")
@Entity(name = "untitled140$TypeOfTransport")
@EnableRestore
@TrackEditScreenHistory
public class TypeOfTransport extends StandardEntity {

    private static final long serialVersionUID = 350142246329442445L;

    @Column(name = "NAME", nullable = false, length = 50)
    @NotNull
    protected String name;
    @OneToOne(fetch = FetchType.LAZY, mappedBy = "typeOfTransport")
    protected Request request;

    public Request getRequest() {
        return request;
    }

    public void setRequest(Request request) {
        this.request = request;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}