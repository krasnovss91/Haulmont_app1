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
    LARGE_CODE integer,
    CODE double precision,
    NAME varchar(50),
    DISPLAY varchar(50),
    --
    primary key (ID)
);