--$Id$

create table TS_REMOTE_CARD_STATE (
    id uuid,
    create_ts timestamp,
    created_by varchar(50),
    ---
    card_id uuid,
    server_id varchar(50),
    state varchar(255),
    constraint fk_remote_card_state_to_card foreign key(card_id) references wf_card(id),
    primary key(id)
);

create unique index idx_ts_remote_card_state_unique on ts_remote_card_state (card_id, server_id);
