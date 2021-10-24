-- INNER JOIN ou JOIN

-- SELECT t1.coluna, t2.coluna
-- FROM tabela1 AS t1
-- INNER JOIN tabela2 AS t2
-- ON t1.coluna_em_comum = t2.coluna_em_comum;

-- SELECT
--     c.customer_id,
--     c.first_name,
--     c.last_name,
--     a.actor_id,
--     a.first_name,
--     a.last_name
-- FROM customer AS c
-- INNER JOIN actor AS a
-- ON c.last_name = a.last_name
-- ORDER BY c.last_name;

-- LEFT JOIN

-- SELECT
--     c.customer_id,
--     c.first_name,
--     c.last_name,
--     a.actor_id,
--     a.first_name,
--     a.last_name
-- FROM customer AS c
-- LEFT JOIN actor AS a
-- ON c.last_name = a.last_name
-- ORDER BY c.last_name;

-- RIGHT JOIN

-- SELECT
--     c.customer_id,
--     c.first_name,
--     c.last_name,
--     a.actor_id,
--     a.first_name,
--     a.last_name
-- FROM customer AS c
-- RIGHT JOIN actor AS a
-- ON c.last_name = a.last_name
-- ORDER BY c.last_name;

-- SELF JOIN
-- Compara e Analiza a tabela com ela mesma.
-- SELECT t1.title, t1.replacement_cost, t2.title, t2.replacement_cost
-- FROM sakila.film AS t1, sakila.film AS t2
-- WHERE t1.length = t2.length;


-- EXISTS

-- OPERADOR EXISTS
-- amigos que possuem pets

-- USE db;
-- SELECT * FROM friends AS f WHERE EXISTS (
-- 	SELECT owner_id FROM pets as p
--     WHERE p.owner_id = f.friend_id
-- );

-- -- NOT EXISTS
-- -- amigos que nao possuem pets

-- SELECT * FROM friends AS f WHERE NOT EXISTS (
-- 	SELECT owner_id FROM pets as p
--     WHERE p.owner_id = f.friend_id
-- );
