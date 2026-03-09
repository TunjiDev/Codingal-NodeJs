CREATE TABLE supplier (
    SNO TEXT PRIMARY KEY,
    SNAME TEXT,
    STATUS INTEGER,
    CITY TEXT
);

INSERT INTO supplier (SNO, SNAME, STATUS, CITY) VALUES
('S1', 'Smith', 20, 'London'),
('S2', 'Jones', 10, 'Paris'),
('S3', 'Blake', 30, 'Paris'),
('S4', 'Clarke', 20, 'London'),
('S5', 'Adams', 30, 'Athens');

SELECT * FROM supplier;







































-- 1) Create a table for Salesman details:
--    a) Use `CREATE TABLE IF NOT EXISTS` to avoid errors if the table already exists.
--    b) Add columns for id, name, city, and commission.
--    c) Set the id column as `PRIMARY KEY`.

-- 2) Insert sample records into the Salesman table:
--    a) Use a single `INSERT INTO ... VALUES` with multiple rows.

-- 3) Display all records from the Salesman table:
--    a) Use `SELECT * FROM Salesman;`

-- 4) Create a table for Orders details:
--    a) Use `CREATE TABLE IF NOT EXISTS`.
--    b) Add columns for order number, purchase amount, order date, customer id, and salesman id.
--    c) Set the order number as `PRIMARY KEY`.

-- 5) Insert sample records into the Orders table:
--    a) Use `INSERT INTO ... VALUES` with multiple rows.

-- 6) Display all records from the Orders table:
--    a) Use `SELECT * FROM Orders;`

-- 7) Select specific columns from Salesman table:
--    a) Use `SELECT name, Comission FROM Salesman;` to show only name and commission.