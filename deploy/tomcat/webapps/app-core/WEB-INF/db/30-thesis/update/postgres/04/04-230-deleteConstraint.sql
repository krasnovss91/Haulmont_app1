-- $Id$
-- Description:

DELETE FROM SEC_CONSTRAINT WHERE group_id  = (select g.ID from SEC_GROUP g where g.NAME like
'%Руководитель подразделения%' LIMIT 1) and entity_name = 'sec$User';
DELETE FROM SEC_CONSTRAINT WHERE group_id  = (select g.ID from SEC_GROUP g where g.NAME like
'%Руководитель департамента%' LIMIT 1) and entity_name = 'sec$User';