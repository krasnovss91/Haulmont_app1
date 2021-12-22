update UNTITLED140_TYPE_OF_TRANSPORT set NAME = '' where NAME is null ;
alter table UNTITLED140_TYPE_OF_TRANSPORT alter column NAME set not null ;
