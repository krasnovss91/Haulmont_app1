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
    NAME varchar(50),
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
    NAME varchar(50),
    --
    primary key (ID)
)^
-- end UNTITLED140_TYPE_OF_TRANSPORT
