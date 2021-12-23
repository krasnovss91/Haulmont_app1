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

    @Column(name = "DESCRIPTIONS")
    protected String descriptions;

    @Column(name = "JUSTIFICATION_FOR_EXCLUSIVITY")
    protected String justificationForExclusivity;

    @Column(name = "PURPOSE_OF_BUSINESS_TRIP")
    protected String purposeOfBusinessTrip;

    @Column(name = "WAY")
    protected String way;

    @Column(name = "NAME_OF_CARGO")
    protected String nameOfCargo;

    public String getNameOfCargo() {
        return nameOfCargo;
    }

    public void setNameOfCargo(String nameOfCargo) {
        this.nameOfCargo = nameOfCargo;
    }

    public String getWay() {
        return way;
    }

    public void setWay(String way) {
        this.way = way;
    }

    public String getPurposeOfBusinessTrip() {
        return purposeOfBusinessTrip;
    }

    public void setPurposeOfBusinessTrip(String purposeOfBusinessTrip) {
        this.purposeOfBusinessTrip = purposeOfBusinessTrip;
    }

    public String getJustificationForExclusivity() {
        return justificationForExclusivity;
    }

    public void setJustificationForExclusivity(String justificationForExclusivity) {
        this.justificationForExclusivity = justificationForExclusivity;
    }

    public String getDescriptions() {
        return descriptions;
    }

    public void setDescriptions(String descriptions) {
        this.descriptions = descriptions;
    }
}