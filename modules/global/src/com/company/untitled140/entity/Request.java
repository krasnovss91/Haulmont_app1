package com.company.untitled140.entity;

import com.haulmont.cuba.core.entity.Category;
import com.haulmont.cuba.core.entity.annotation.EnableRestore;
import com.haulmont.cuba.core.entity.annotation.Listeners;
import com.haulmont.cuba.core.entity.annotation.TrackEditScreenHistory;
import com.haulmont.thesis.core.entity.Numerator;
import com.haulmont.thesis.core.entity.TsCard;

import javax.persistence.*;
import java.util.Date;

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
    @JoinColumn(name = "NUMBER_ID")
    protected Numerator number;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "CATEGORY_OF_REQUEST_ID")
    protected Category categoryOfRequest;

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

    @Temporal(TemporalType.DATE)
    @Column(name = "BUSINES_TRIP_START")
    protected Date businesTripStart;

    @Temporal(TemporalType.DATE)
    @Column(name = "BUSINESS_TRIP_END")
    protected Date businessTripEnd;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "TYPE_OF_TRANSPORT_ID")
    protected TypeOfTransport typeOfTransport;

    @Column(name = "FARE")
    protected Integer fare;

    @Column(name = "HOTEL")
    protected String hotel;

    @Temporal(TemporalType.DATE)
    @Column(name = "ARRIVAL_DATE")
    protected Date arrivalDate;

    @Temporal(TemporalType.DATE)
    @Column(name = "DEPARTURE_DATE")
    protected Date departureDate;

    @Column(name = "COST_OF_LIVING")
    protected Integer costOfLiving;

    @Column(name = "DAILY_ALLOWANCE")
    protected Integer dailyAllowance;

    @Column(name = "TOTAL_COST")
    protected Integer totalCost;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "BOOKING_ID")
    protected Booking booking;

    @Column(name = "RECIPIENT_ORGANIZATION")
    protected String recipientOrganization;

    @Column(name = "ADDRESS_OF_DELIVERY")
    protected String addressOfDelivery;

    @Column(name = "DELIVERY_TIME_REQUEST")
    protected String deliveryTimeRequest;

    @Column(name = "NAME_OF_CARGO")
    protected String nameOfCargo;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "CFO_ID")
    protected CFO cfo;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "EXPENCE_ITEM_ID")
    protected ExpenceItem expenceItem;

    @Column(name = "SUM_")
    protected Integer sum;

    public Integer getSum() {
        return sum;
    }

    public void setSum(Integer sum) {
        this.sum = sum;
    }

    public ExpenceItem getExpenceItem() {
        return expenceItem;
    }

    public void setExpenceItem(ExpenceItem expenceItem) {
        this.expenceItem = expenceItem;
    }

    public CFO getCfo() {
        return cfo;
    }

    public void setCfo(CFO cfo) {
        this.cfo = cfo;
    }

    public Date getBusinessTripEnd() {
        return businessTripEnd;
    }

    public void setBusinessTripEnd(Date businessTripEnd) {
        this.businessTripEnd = businessTripEnd;
    }

    public Date getBusinesTripStart() {
        return businesTripStart;
    }

    public void setBusinesTripStart(Date businesTripStart) {
        this.businesTripStart = businesTripStart;
    }

    public Date getDepartureDate() {
        return departureDate;
    }

    public void setDepartureDate(Date departureDate) {
        this.departureDate = departureDate;
    }

    public Date getArrivalDate() {
        return arrivalDate;
    }

    public void setArrivalDate(Date arrivalDate) {
        this.arrivalDate = arrivalDate;
    }

    public Integer getTotalCost() {
        return totalCost;
    }

    public void setTotalCost(Integer totalCost) {
        this.totalCost = totalCost;
    }

    public Integer getDailyAllowance() {
        return dailyAllowance;
    }

    public void setDailyAllowance(Integer dailyAllowance) {
        this.dailyAllowance = dailyAllowance;
    }

    public Integer getCostOfLiving() {
        return costOfLiving;
    }

    public void setCostOfLiving(Integer costOfLiving) {
        this.costOfLiving = costOfLiving;
    }

    public Integer getFare() {
        return fare;
    }

    public void setFare(Integer fare) {
        this.fare = fare;
    }

    public Numerator getNumber() {
        return number;
    }

    public void setNumber(Numerator number) {
        this.number = number;
    }

    public Booking getBooking() {
        return booking;
    }

    public void setBooking(Booking booking) {
        this.booking = booking;
    }

    public TypeOfTransport getTypeOfTransport() {
        return typeOfTransport;
    }

    public void setTypeOfTransport(TypeOfTransport typeOfTransport) {
        this.typeOfTransport = typeOfTransport;
    }

    public Category getCategoryOfRequest() {
        return categoryOfRequest;
    }

    public void setCategoryOfRequest(Category categoryOfRequest) {
        this.categoryOfRequest = categoryOfRequest;
    }

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