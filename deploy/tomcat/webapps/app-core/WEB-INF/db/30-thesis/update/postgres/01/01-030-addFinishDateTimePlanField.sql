-- $Id$
-- Description: add finish_datetime_plan field

-- TM_TASK

alter table TM_TASK add FINISH_DATETIME_PLAN timestamp;

update TM_TASK set FINISH_DATETIME_PLAN = CREATE_DATE;

alter table TM_TASK drop FINISH_DATE_PLAN;

alter table TM_TASK add FINISH_DATE_PLAN date;

update TM_TASK set FINISH_DATE_PLAN = FINISH_DATETIME_PLAN;

-- TM_TASK_PATTERN

alter table TM_TASK_PATTERN add FINISH_DATETIME_PLAN timestamp;

update TM_TASK_PATTERN set FINISH_DATETIME_PLAN = CREATE_DATE;

alter table TM_TASK_PATTERN drop FINISH_DATE_PLAN;

alter table TM_TASK_PATTERN add FINISH_DATE_PLAN date;

update TM_TASK_PATTERN set FINISH_DATE_PLAN = FINISH_DATETIME_PLAN;

-- TM_TASK_VERSION

alter table TM_TASK_VERSION add FINISH_DATETIME_PLAN timestamp;

update TM_TASK_VERSION set FINISH_DATETIME_PLAN = CREATE_DATE;

alter table TM_TASK_VERSION drop FINISH_DATE_PLAN;

alter table TM_TASK_VERSION add FINISH_DATE_PLAN date;

update TM_TASK_VERSION set FINISH_DATE_PLAN = FINISH_DATETIME_PLAN;

