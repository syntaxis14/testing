SELECT a.id, a.name, b.parent_id FROM a_table as a
JOIN b_table as b ON a.parent_id = b.parent_name;

