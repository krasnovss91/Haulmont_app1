-- $Id$
-- Description:

update df_doc_office_data set response_to_doc_id = null where doc_id in (
select card_id from df_doc, wf_card where df_doc.is_template = true and df_doc.card_id = wf_card.id and wf_card.delete_ts is null)
and delete_ts is null;