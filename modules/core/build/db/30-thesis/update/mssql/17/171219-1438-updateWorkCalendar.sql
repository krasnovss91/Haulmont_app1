-- $Id$
-- Description:
DELETE FROM WF_CALENDAR WHERE WORK_DAY IS NOT NULL^

INSERT INTO WF_CALENDAR (ID, CREATE_TS, CREATED_BY, WORK_DAY) VALUES (newid(), current_timestamp, 'admin', {d '2018-01-01'})^
INSERT INTO WF_CALENDAR (ID, CREATE_TS, CREATED_BY, WORK_DAY) VALUES (newid(), current_timestamp, 'admin', {d '2018-01-02'})^
INSERT INTO WF_CALENDAR (ID, CREATE_TS, CREATED_BY, WORK_DAY) VALUES (newid(), current_timestamp, 'admin', {d '2018-01-03'})^
INSERT INTO WF_CALENDAR (ID, CREATE_TS, CREATED_BY, WORK_DAY) VALUES (newid(), current_timestamp, 'admin', {d '2018-01-04'})^
INSERT INTO WF_CALENDAR (ID, CREATE_TS, CREATED_BY, WORK_DAY) VALUES (newid(), current_timestamp, 'admin', {d '2018-01-05'})^
INSERT INTO WF_CALENDAR (ID, CREATE_TS, CREATED_BY, WORK_DAY) VALUES (newid(), current_timestamp, 'admin', {d '2018-01-08'})^

INSERT INTO WF_CALENDAR (ID, CREATE_TS, CREATED_BY, WORK_DAY, WORK_START_TIME, WORK_END_TIME) VALUES (newid(), current_timestamp, 'admin', {d '2018-02-22'},{t '09:00:00'},{t '13:00:00'})^
INSERT INTO WF_CALENDAR (ID, CREATE_TS, CREATED_BY, WORK_DAY, WORK_START_TIME, WORK_END_TIME) VALUES (newid(), current_timestamp, 'admin', {d '2018-02-22'},{t '14:00:00'},{t '17:00:00'})^
INSERT INTO WF_CALENDAR (ID, CREATE_TS, CREATED_BY, WORK_DAY) VALUES (newid(), current_timestamp, 'admin', {d '2018-02-23'})^

INSERT INTO WF_CALENDAR (ID, CREATE_TS, CREATED_BY, WORK_DAY, WORK_START_TIME, WORK_END_TIME) VALUES (newid(), current_timestamp, 'admin', {d '2018-03-07'},{t '09:00:00'},{t '13:00:00'})^
INSERT INTO WF_CALENDAR (ID, CREATE_TS, CREATED_BY, WORK_DAY, WORK_START_TIME, WORK_END_TIME) VALUES (newid(), current_timestamp, 'admin', {d '2018-03-07'},{t '14:00:00'},{t '17:00:00'})^
INSERT INTO WF_CALENDAR (ID, CREATE_TS, CREATED_BY, WORK_DAY) VALUES (newid(), current_timestamp, 'admin', {d '2018-03-08'})^
INSERT INTO WF_CALENDAR (ID, CREATE_TS, CREATED_BY, WORK_DAY) VALUES (newid(), current_timestamp, 'admin', {d '2018-03-09'})^

INSERT INTO WF_CALENDAR (ID, CREATE_TS, CREATED_BY, WORK_DAY, WORK_START_TIME, WORK_END_TIME) VALUES (newid(), current_timestamp, 'admin', {d '2018-04-28'},{t '09:00:00'},{t '13:00:00'})^
INSERT INTO WF_CALENDAR (ID, CREATE_TS, CREATED_BY, WORK_DAY, WORK_START_TIME, WORK_END_TIME) VALUES (newid(), current_timestamp, 'admin', {d '2018-04-28'},{t '14:00:00'},{t '17:00:00'})^
INSERT INTO WF_CALENDAR (ID, CREATE_TS, CREATED_BY, WORK_DAY) VALUES (newid(), current_timestamp, 'admin', {d '2018-04-30'})^

INSERT INTO WF_CALENDAR (ID, CREATE_TS, CREATED_BY, WORK_DAY) VALUES (newid(), current_timestamp, 'admin', {d '2018-05-01'})^
INSERT INTO WF_CALENDAR (ID, CREATE_TS, CREATED_BY, WORK_DAY) VALUES (newid(), current_timestamp, 'admin', {d '2018-05-02'})^
INSERT INTO WF_CALENDAR (ID, CREATE_TS, CREATED_BY, WORK_DAY, WORK_START_TIME, WORK_END_TIME) VALUES (newid(), current_timestamp, 'admin', {d '2018-05-08'},{t '09:00:00'},{t '13:00:00'})^
INSERT INTO WF_CALENDAR (ID, CREATE_TS, CREATED_BY, WORK_DAY, WORK_START_TIME, WORK_END_TIME) VALUES (newid(), current_timestamp, 'admin', {d '2018-05-08'},{t '14:00:00'},{t '17:00:00'})^
INSERT INTO WF_CALENDAR (ID, CREATE_TS, CREATED_BY, WORK_DAY) VALUES (newid(), current_timestamp, 'admin', {d '2018-05-09'})^

INSERT INTO WF_CALENDAR (ID, CREATE_TS, CREATED_BY, WORK_DAY, WORK_START_TIME, WORK_END_TIME) VALUES (newid(), current_timestamp, 'admin', {d '2018-06-09'},{t '09:00:00'},{t '13:00:00'})^
INSERT INTO WF_CALENDAR (ID, CREATE_TS, CREATED_BY, WORK_DAY, WORK_START_TIME, WORK_END_TIME) VALUES (newid(), current_timestamp, 'admin', {d '2018-06-09'},{t '14:00:00'},{t '17:00:00'})^
INSERT INTO WF_CALENDAR (ID, CREATE_TS, CREATED_BY, WORK_DAY) VALUES (newid(), current_timestamp, 'admin', {d '2018-06-11'})^
INSERT INTO WF_CALENDAR (ID, CREATE_TS, CREATED_BY, WORK_DAY) VALUES (newid(), current_timestamp, 'admin', {d '2018-06-12'})^

INSERT INTO WF_CALENDAR (ID, CREATE_TS, CREATED_BY, WORK_DAY) VALUES (newid(), current_timestamp, 'admin', {d '2018-11-05'})^

INSERT INTO WF_CALENDAR (ID, CREATE_TS, CREATED_BY, WORK_DAY, WORK_START_TIME, WORK_END_TIME) VALUES (newid(), current_timestamp, 'admin', {d '2018-12-29'},{t '09:00:00'},{t '13:00:00'})^
INSERT INTO WF_CALENDAR (ID, CREATE_TS, CREATED_BY, WORK_DAY, WORK_START_TIME, WORK_END_TIME) VALUES (newid(), current_timestamp, 'admin', {d '2018-12-29'},{t '14:00:00'},{t '17:00:00'})^
INSERT INTO WF_CALENDAR (ID, CREATE_TS, CREATED_BY, WORK_DAY) VALUES (newid(), current_timestamp, 'admin', {d '2018-12-31'})^