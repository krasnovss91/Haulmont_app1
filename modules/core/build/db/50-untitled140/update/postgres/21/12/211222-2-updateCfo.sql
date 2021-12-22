update UNTITLED140_CFO set NUMBER_OF_CFO = 0 where NUMBER_OF_CFO is null ;
alter table UNTITLED140_CFO alter column NUMBER_OF_CFO set not null ;
update UNTITLED140_CFO set NAME = '' where NAME is null ;
alter table UNTITLED140_CFO alter column NAME set not null ;
update UNTITLED140_CFO set DISPLAY = '' where DISPLAY is null ;
alter table UNTITLED140_CFO alter column DISPLAY set not null ;
