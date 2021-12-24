-- begin insert default numerator for Request
CREATE OR REPLACE FUNCTION baseInsert()
RETURNS integer
AS $$
DECLARE
    cnt integer = 0;
BEGIN
cnt = (select count(id) from DF_NUMERATOR where CODE = 'RequestNumerator' and delete_ts is null);
if(cnt = 0) then
    INSERT INTO DF_NUMERATOR (ID, CREATE_TS, CREATED_BY, VERSION, CODE, NUMERATOR_FORMAT, SCRIPT_ENABLED,
                              PERIODICITY, NUMBER_INITIAL_VALUE, LOC_NAME)
    VALUES ('b00e0271-7fa1-4700-96fa-5b2a3051ab97', now(), 'system', 1, 'RequestNumerator', '[number]', FALSE, 'Y', 1,
            '{"captionWithLanguageList":[{"language":"ru","caption":"Заявка"},{"language":"en","caption":"Request"}]}'
    );
end if;

return 0;
END;
$$
LANGUAGE plpgsql;
^

select baseInsert()^
drop function if exists baseInsert()^
-- end insert default numerator for Request
