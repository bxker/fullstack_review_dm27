INSERT INTO products
(product_name, product_img, product_price, product_description)
VALUES
($1, $2, $3, $4);

SELECT * FROM products;