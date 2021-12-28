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
);