-- $Id$

create table TS_REST_API_TOKEN (
    ID uniqueidentifier not null,
    CREATE_TS datetime,
    CREATED_BY varchar(50),
    --
    ACCESS_TOKEN_VALUE varchar(255),
    ACCESS_TOKEN_BYTES image,
    AUTHENTICATION_KEY varchar(255),
    AUTHENTICATION_BYTES image,
    EXPIRY datetime,
    --
    primary key (ID)
)^