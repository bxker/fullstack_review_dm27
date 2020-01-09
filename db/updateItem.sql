UPDATE products
SET product_name = $2,
    product_img = $3,
    product_price = $4,
    product_description = $5
WHERE
    product_id = $1
RETURNING *;