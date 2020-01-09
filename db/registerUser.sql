INSERT INTO users
(username, hash, is_Admin)
VALUES
($1, $2, $3)
RETURNING *;