package com.company.untitled140.entity;

import com.haulmont.cuba.core.entity.annotation.EnableRestore;
import com.haulmont.cuba.core.entity.annotation.Listeners;
import com.haulmont.cuba.core.entity.annotation.TrackEditScreenHistory;
import com.haulmont.thesis.core.entity.TsCard;

import javax.persistence.*;

@DiscriminatorValue("2000")
@Table(name = "UNTITLED140_REQUEST")
@EnableRestore
@TrackEditScreenHistory
@Entity(name = "untitled140$Request")
@Listeners("untitled140_RequestListener")
@PrimaryKeyJoinColumn(name = "CARD_ID", referencedColumnName = "ID")
public class Request extends TsCard {
    private static final long serialVersionUID = 6935893211447730139L;

    @Column(name = "NUMBER_", length = 50)
    protected String number;

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }
}