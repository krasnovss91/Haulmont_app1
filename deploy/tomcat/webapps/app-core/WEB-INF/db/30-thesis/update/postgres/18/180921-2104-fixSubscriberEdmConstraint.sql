drop index IDX_SUBSCR_CONTR_UNIQ^
create unique index IDX_SUBSCR_CONTR_UNIQ on TS_SUBSCRIBER_EDM (CONTRACTOR_ID) where DELETE_TS is null^