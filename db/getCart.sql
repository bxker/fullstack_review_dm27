SELECT c.user_id, p.product_id, p.product_name, p.product_img, p.product_price, u.username, c.cart_id FROM cart c
INNER JOIN users u
ON u.user_id = c.user_id
INNER JOIN products p
ON p.product_id = c.product_id
WHERE
c.user_id = $1;