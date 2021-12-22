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
