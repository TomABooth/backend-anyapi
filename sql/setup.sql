-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
CREATE TABLE champs (
  id BIGINT GENERATED ALWAYS AS IDENTITY,
  name VARCHAR NOT NULL,
  venue VARCHAR NOT NULL,
  year INT NOT NULL
);

INSERT INTO champs (name, venue,  year)
VALUES 
('Loic Bruni', 'Les Gets', 2022),
('Greg Minaar', 'Val di Sole', 2021),
('Reece Wilson', 'Leogang', 2020),
('Loic Bruni', 'Mont-Sainte-Anne', 2019),
('Loic Bruni', 'Lenzerheide', 2018),
('Loic Bruni', 'Cairns', 2017);