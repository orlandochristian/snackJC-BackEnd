DROP DATABASE IF EXISTS snacksdb;
CREATE DATABASE snacksdb;

\c snacksdb;

  CREATE TABLE snacks (
  snack_id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  image TEXT, 
  fiber INT check (fiber >= 0) default 0,
  protein INT default 0,
  sugar INT default 0,
  is_healthy BOOLEAN
 );
