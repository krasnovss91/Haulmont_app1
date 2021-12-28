-- begin UNTITLED140_TYPE_OF_PUSHCARE
create table UNTITLED140_TYPE_OF_PUSHCARE (
    ID uuid,
    VERSION integer not null,
    CREATE_TS timestamp,
    CREATED_BY varchar(50),
    UPDATE_TS timestamp,
    UPDATED_BY varchar(50),
    DELETE_TS timestamp,
    DELETED_BY varchar(50),
    --
    NAME varchar(50) not null,
    --
    primary key (ID)
)^
-- end UNTITLED140_TYPE_OF_PUSHCARE
-- begin UNTITLED140_TYPE_OF_TRANSPORT
create table UNTITLED140_TYPE_OF_TRANSPORT (
    ID uuid,
    VERSION integer not null,
    CREATE_TS timestamp,
    CREATED_BY varchar(50),
    UPDATE_TS timestamp,
    UPDATED_BY varchar(50),
    DELETE_TS timestamp,
    DELETED_BY varchar(50),
    --
    NAME varchar(50) not null,
    --
    primary key (ID)
)^
-- end UNTITLED140_TYPE_OF_TRANSPORT
-- begin UNTITLED140_CFO
create table UNTITLED140_CFO (
    ID uuid,
    VERSION integer not null,
    CREATE_TS timestamp,
    CREATED_BY varchar(50),
    UPDATE_TS timestamp,
    UPDATED_BY varchar(50),
    DELETE_TS timestamp,
    DELETED_BY varchar(50),
    --
    NUMBER_OF_CFO integer not null,
    NAME varchar(50) not null,
    DISPLAY varchar(50) not null,
    --
    primary key (ID)
)^
-- end UNTITLED140_CFO
-- begin UNTITLED140_EXPENCE_ITEM
create table UNTITLED140_EXPENCE_ITEM (
    ID uuid,
    VERSION integer not null,
    CREATE_TS timestamp,
    CREATED_BY varchar(50),
    UPDATE_TS timestamp,
    UPDATED_BY varchar(50),
    DELETE_TS timestamp,
    DELETED_BY varchar(50),
    --
    LARGE_CODE integer not null,
    CODE double precision not null,
    NAME varchar(50) not null,
    DISPLAY varchar(50) not null,
    --
    primary key (ID)
)^
-- end UNTITLED140_EXPENCE_ITEM
-- begin UNTITLED140_BOOKING
create table UNTITLED140_BOOKING (
    ID uuid,
    VERSION integer not null,
    CREATE_TS timestamp,
    CREATED_BY varchar(50),
    UPDATE_TS timestamp,
    UPDATED_BY varchar(50),
    DELETE_TS timestamp,
    DELETED_BY varchar(50),
    --
    NAME varchar(50) not null,
    --
    primary key (ID)
)^
-- end UNTITLED140_BOOKING
-- begin UNTITLED140_REQUEST
create table UNTITLED140_REQUEST (
    CARD_ID uuid,
    --
    DATE_ date,
    NUMBER_ID uuid,
    INITIATOR_ID uuid,
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
)^
-- end UNTITLED140_REQUEST
-- begin UNTITLED140_CFO_LINE
create table UNTITLED140_CFO_LINE (
    ID uuid,
    VERSION integer not null,
    CREATE_TS timestamp,
    CREATED_BY varchar(50),
    UPDATE_TS timestamp,
    UPDATED_BY varchar(50),
    DELETE_TS timestamp,
    DELETED_BY varchar(50),
    --
    CFO_ID uuid,
    EXPENCE_ITEM_ID uuid,
    SUM_ integer,
    --
    primary key (ID)
)^
-- end UNTITLED140_CFO_LINE
