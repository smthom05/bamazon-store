DROP DATABASE IF EXISTS bamazonDB;
CREATE database bamazonDB;

USE bamazonDB;

CREATE TABLE products(
    item_id INT NOT NULL,
    product_name VARCHAR(250) NOT NULL,
    department_name VARCHAR(250) NOT NULL,
    price DECIMAL (10, 3) NOT NULL,
    stock_quantity INT NOT NULL
);


INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (001, "Xbox 1 X", "Electronics", 499.99, 50);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (002, "Nintendo 64", "Electronics", 150, 20);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (003, "Overrated Beats By Dre", "Electronics", 300, 10);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (004, "Cat Sweater", "Clothing", 25.50, 10);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (005, "Fresh Laundry Candle", "Household Products", 12.99, 50);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (006, "Chumbawamba CD", "Music", 12.89, 30);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (007, "Skis", "Sporting Goods", 700, 10);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (008, "Surge Soda", "Food", 2.50, 60);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (009, "Wok", "Kitchen", 29.99, 50);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (010, "Chupacabra", "Sci Fi", 999999, 5);


SELECT * FROM products;
