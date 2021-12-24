create table UNTITLED140_REQUEST (
    CARD_ID uuid,
    --
    CATEGORY_OF_REQUEST_ID uuid,
    TYPE_OF_PUSHCARE_ID uuid,
    PLANED_PUSHCARE_PRICE_WITH_VAT integer,
    AVAILABILITY_OF_FUNDS_IN_BUDGET varchar(50),
    DESCRIPTIONS varchar(255),
    JUSTIFICATION_FOR_EXCLUSIVITY varchar(255),
    EMPLOYEE_ID uuid,
    PURPOSE_OF_BUSINESS_TRIP varchar(255),
    WAY varchar(255),
    BUSINES_TRIP_START date,
    BUSINESS_TRIP_END date,
    TYPE_OF_TRANSPORT_ID uuid,
    FARE integer,
    HOTEL varchar(255),
    ARRIVAL_DATE date,
    DEPARTURE_DATE date,
    COST_OF_LIVING integer,
    DAILY_ALLOWANCE integer,
    TOTAL_COST integer,
    BOOKING_ID uuid,
    RECIPIENT_ORGANIZATION varchar(255),
    ADDRESS_OF_DELIVERY varchar(255),
    DELIVERY_TIME_REQUEST varchar(255),
    NAME_OF_CARGO varchar(255),
    CFO_ID uuid,
    EXPENCE_ITEM_ID uuid,
    SUM_ integer,
    --
    primary key (CARD_ID)
);