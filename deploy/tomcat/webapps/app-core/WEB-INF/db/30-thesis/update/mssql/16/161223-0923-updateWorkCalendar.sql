-- $Id$
-- Description:
DELETE FROM WF_CALENDAR WHERE WORK_DAY IS NOT NULL^

INSERT INTO WF_CALENDAR (ID, CREATE_TS, CREATED_BY, WORK_DAY) VALUES (newid(), current_timestamp, 'admin', {d '2017-01-02'})^
INSERT INTO WF_CALENDAR (ID, CREATE_TS, CREATED_BY, WORK_DAY) VALUES (newid(), current_timestamp, 'admin', {d '2017-01-03'})^
INSERT INTO WF_CALENDAR (ID, CREATE_TS, CREATED_BY, WORK_DAY) VALUES (newid(), current_timestamp, 'admin', {d '2017-01-04'})^
INSERT INTO WF_CALENDAR (ID, CREATE_TS, CREATED_BY, WORK_DAY) VALUES (newid(), current_timestamp, 'admin', {d '2017-01-05'})^
INSERT INTO WF_CALENDAR (ID, CREATE_TS, CREATED_BY, WORK_DAY) VALUES (newid(), current_timestamp, 'admin', {d '2017-01-06'})^

INSERT INTO WF_CALENDAR (ID, CREATE_TS, CREATED_BY, WORK_DAY, WORK_START_TIME, WORK_END_TIME) VALUES (newid(), current_timestamp, 'admin', {d '2017-02-22'},{t '09:00:00'},{t '13:00:00'})^
INSERT INTO WF_CALENDAR (ID, CREATE_TS, CREATED_BY, WORK_DAY, WORK_START_TIME, WORK_END_TIME) VALUES (newid(), current_timestamp, 'admin', {d '2017-02-22'},{t '14:00:00'},{t '17:00:00'})^
INSERT INTO WF_CALENDAR (ID, CREATE_TS, CREATED_BY, WORK_DAY) VALUES (newid(), current_timestamp, 'admin', {d '2017-02-23'})^
INSERT INTO WF_CALENDAR (ID, CREATE_TS, CREATED_BY, WORK_DAY) VALUES (newid(), current_timestamp, 'admin', {d '2017-02-24'})^

INSERT INTO WF_CALENDAR (ID, CREATE_TS, CREATED_BY, WORK_DAY, WORK_START_TIME, WORK_END_TIME) VALUES (newid(), current_timestamp, 'admin', {d '2017-03-07'},{t '09:00:00'},{t '13:00:00'})^
INSERT INTO WF_CALENDAR (ID, CREATE_TS, CREATED_BY, WORK_DAY, WORK_START_TIME, WORK_END_TIME) VALUES (newid(), current_timestamp, 'admin', {d '2017-03-07'},{t '14:00:00'},{t '17:00:00'})^
INSERT INTO WF_CALENDAR (ID, CREATE_TS, CREATED_BY, WORK_DAY) VALUES (newid(), current_timestamp, 'admin', {d '2017-03-08'})^

INSERT INTO WF_CALENDAR (ID, CREATE_TS, CREATED_BY, WORK_DAY) VALUES (newid(), current_timestamp, 'admin', {d '2017-05-01'})^
INSERT INTO WF_CALENDAR (ID, CREATE_TS, CREATED_BY, WORK_DAY) VALUES (newid(), current_timestamp, 'admin', {d '2017-05-08'})^
INSERT INTO WF_CALENDAR (ID, CREATE_TS, CREATED_BY, WORK_DAY) VALUES (newid(), current_timestamp, 'admin', {d '2017-05-09'})^

INSERT INTO WF_CALENDAR (ID, CREATE_TS, CREATED_BY, WORK_DAY) VALUES (newid(), current_timestamp, 'admin', {d '2017-06-12'})^

INSERT INTO WF_CALENDAR (ID, CREATE_TS, CREATED_BY, WORK_DAY, WORK_START_TIME, WORK_END_TIME) VALUES (newid(), current_timestamp, 'admin', {d '2017-11-03'},{t '09:00:00'},{t '13:00:00'})^
INSERT INTO WF_CALENDAR (ID, CREATE_TS, CREATED_BY, WORK_DAY, WORK_START_TIME, WORK_END_TIME) VALUES (newid(), current_timestamp, 'admin', {d '2017-11-03'},{t '14:00:00'},{t '17:00:00'})^
INSERT INTO WF_CALENDAR (ID, CREATE_TS, CREATED_BY, WORK_DAY) VALUES (newid(), current_timestamp, 'admin', {d '2017-11-06'})^