-- $Id$

exec create_or_update_sec_permission @r_name='SimpleUser', @p_target='core$ScheduledTask.browse', @p_type=10, @p_value=0 ^
exec create_or_update_sec_permission @r_name='Administrators', @p_target='core$ScheduledTask.browse', @p_type=10, @p_value=1 ^