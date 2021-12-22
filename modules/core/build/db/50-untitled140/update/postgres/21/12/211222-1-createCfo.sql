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
    NUMBER_OF_CFO integer,
    NAME varchar(50),
    DISPLAY varchar(50),
    --
    primary key (ID)
);