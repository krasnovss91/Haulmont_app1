--$Id$


IF EXISTS (SELECT *
   FROM sys.foreign_keys
   WHERE NAME = 'FK_TS_CARD_ACL_DF_DEPARTMENT')

alter table TS_CARD_ACL drop constraint FK_TS_CARD_ACL_DF_DEPARTMENT;


alter table TS_CARD_ACL add constraint FK_TS_CARD_ACL_DF_DEPARTMENT foreign key (DEPARTMENT_ID) references DF_CORRESPONDENT(id)^