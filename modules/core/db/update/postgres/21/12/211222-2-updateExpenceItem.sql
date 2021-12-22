update UNTITLED140_EXPENCE_ITEM set LARGE_CODE = 0 where LARGE_CODE is null ;
alter table UNTITLED140_EXPENCE_ITEM alter column LARGE_CODE set not null ;
update UNTITLED140_EXPENCE_ITEM set CODE = 0 where CODE is null ;
alter table UNTITLED140_EXPENCE_ITEM alter column CODE set not null ;
update UNTITLED140_EXPENCE_ITEM set NAME = '' where NAME is null ;
alter table UNTITLED140_EXPENCE_ITEM alter column NAME set not null ;
update UNTITLED140_EXPENCE_ITEM set DISPLAY = '' where DISPLAY is null ;
alter table UNTITLED140_EXPENCE_ITEM alter column DISPLAY set not null ;
