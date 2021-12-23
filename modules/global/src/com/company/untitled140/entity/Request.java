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

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "TYPE_OF_PUSHCARE_ID")
    protected TypeOfPushcare typeOfPushcare;

    @Column(name = "DESCRIPTIONS")
    protected String descriptions;

    @Column(name = "JUSTIFICATION_FOR_EXCLUSIVITY")
    protected String justificationForExclusivity;

    @Column(name = "PURPOSE_OF_BUSINESS_TRIP")
    protected String purposeOfBusinessTrip;

    @Column(name = "WAY")
    protected String way;

    @Column(name = "HOTEL")
    protected String hotel;

    @Column(name = "RECIPIENT_ORGANIZATION")
    protected String recipientOrganization;

    @Column(name = "ADDRESS_OF_DELIVERY")
    protected String addressOfDelivery;

    @Column(name = "DELIVERY_TIME_REQUEST")
    protected String deliveryTimeRequest;

    @Column(name = "NAME_OF_CARGO")
    protected String nameOfCargo;

    public TypeOfPushcare getTypeOfPushcare() {
        return typeOfPushcare;
    }

    public void setTypeOfPushcare(TypeOfPushcare typeOfPushcare) {
        this.typeOfPushcare = typeOfPushcare;
    }

    public String getHotel() {
        return hotel;
    }

    public void setHotel(String hotel) {
        this.hotel = hotel;
    }

    public String getRecipientOrganization() {
        return recipientOrganization;
    }

    public void setRecipientOrganization(String recipientOrganization) {
        this.recipientOrganization = recipientOrganization;
    }

    public String getDeliveryTimeRequest() {
        return deliveryTimeRequest;
    }

    public void setDeliveryTimeRequest(String deliveryTimeRequest) {
        this.deliveryTimeRequest = deliveryTimeRequest;
    }

    public String getAddressOfDelivery() {
        return addressOfDelivery;
    }

    public void setAddressOfDelivery(String addressOfDelivery) {
        this.addressOfDelivery = addressOfDelivery;
    }

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