-- begin UNTITLED140_REQUEST
alter table UNTITLED140_REQUEST add constraint FK_UNTITLED140_REQUEST_ON_NUMBER foreign key (NUMBER_ID) references DF_NUMERATOR(ID)^
alter table UNTITLED140_REQUEST add constraint FK_UNTITLED140_REQUEST_ON_INITIATOR foreign key (INITIATOR_ID) references SEC_USER(ID)^
alter table UNTITLED140_REQUEST add constraint FK_UNTITLED140_REQUEST_ON_CATEGORY_OF_REQUEST foreign key (CATEGORY_OF_REQUEST_ID) references SYS_CATEGORY(ID)^
alter table UNTITLED140_REQUEST add constraint FK_UNTITLED140_REQUEST_ON_TYPE_OF_PUSHCARE foreign key (TYPE_OF_PUSHCARE_ID) references UNTITLED140_TYPE_OF_PUSHCARE(ID)^
alter table UNTITLED140_REQUEST add constraint FK_UNTITLED140_REQUEST_ON_EMPLOYEE foreign key (EMPLOYEE_ID) references DF_EMPLOYEE(CORRESPONDENT_ID)^
alter table UNTITLED140_REQUEST add constraint FK_UNTITLED140_REQUEST_ON_TYPE_OF_TRANSPORT foreign key (TYPE_OF_TRANSPORT_ID) references UNTITLED140_TYPE_OF_TRANSPORT(ID)^
alter table UNTITLED140_REQUEST add constraint FK_UNTITLED140_REQUEST_ON_BOOKING foreign key (BOOKING_ID) references UNTITLED140_BOOKING(ID)^
alter table UNTITLED140_REQUEST add constraint FK_UNTITLED140_REQUEST_ON_CFO foreign key (CFO_ID) references UNTITLED140_CFO(ID)^
alter table UNTITLED140_REQUEST add constraint FK_UNTITLED140_REQUEST_ON_EXPENCE_ITEM foreign key (EXPENCE_ITEM_ID) references UNTITLED140_EXPENCE_ITEM(ID)^
alter table UNTITLED140_REQUEST add constraint FK_UNTITLED140_REQUEST_ON_CARD foreign key (CARD_ID) references WF_CARD(ID) on delete CASCADE^
create index IDX_UNTITLED140_REQUEST_ON_NUMBER on UNTITLED140_REQUEST (NUMBER_ID)^
create index IDX_UNTITLED140_REQUEST_ON_INITIATOR on UNTITLED140_REQUEST (INITIATOR_ID)^
create index IDX_UNTITLED140_REQUEST_ON_CATEGORY_OF_REQUEST on UNTITLED140_REQUEST (CATEGORY_OF_REQUEST_ID)^
create index IDX_UNTITLED140_REQUEST_ON_TYPE_OF_PUSHCARE on UNTITLED140_REQUEST (TYPE_OF_PUSHCARE_ID)^
create index IDX_UNTITLED140_REQUEST_ON_EMPLOYEE on UNTITLED140_REQUEST (EMPLOYEE_ID)^
create index IDX_UNTITLED140_REQUEST_ON_TYPE_OF_TRANSPORT on UNTITLED140_REQUEST (TYPE_OF_TRANSPORT_ID)^
create index IDX_UNTITLED140_REQUEST_ON_BOOKING on UNTITLED140_REQUEST (BOOKING_ID)^
create index IDX_UNTITLED140_REQUEST_ON_CFO on UNTITLED140_REQUEST (CFO_ID)^
create index IDX_UNTITLED140_REQUEST_ON_EXPENCE_ITEM on UNTITLED140_REQUEST (EXPENCE_ITEM_ID)^
-- end UNTITLED140_REQUEST
-- begin UNTITLED140_CFO_LINE
alter table UNTITLED140_CFO_LINE add constraint FK_UNTITLED140_CFO_LINE_ON_CFO foreign key (CFO_ID) references UNTITLED140_CFO(ID)^
alter table UNTITLED140_CFO_LINE add constraint FK_UNTITLED140_CFO_LINE_ON_EXPENCE_ITEM foreign key (EXPENCE_ITEM_ID) references UNTITLED140_EXPENCE_ITEM(ID)^
create index IDX_UNTITLED140_CFO_LINE_ON_CFO on UNTITLED140_CFO_LINE (CFO_ID)^
create index IDX_UNTITLED140_CFO_LINE_ON_EXPENCE_ITEM on UNTITLED140_CFO_LINE (EXPENCE_ITEM_ID)^
-- end UNTITLED140_CFO_LINE
