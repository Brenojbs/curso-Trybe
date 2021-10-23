-- Exer 1

SELECT m.title, b.domestic_sales, b.international_sales
FROM Pixar.BoxOffice AS `b`
INNER JOIN Pixar.Movies AS `m`
ON b.movie_id = m.id;

-- Exer 2

SELECT m.title, b.international_sales
FROM Pixar.BoxOffice AS `b`
INNER JOIN Pixar.Movies AS `m`
ON b.domestic_sales < b.international_sales;

-- Exer 3

SELECT m.title, b.rating
FROM Pixar.BoxOffice AS `b`
INNER JOIN Pixar.Movies AS `m`
ORDER BY b.rating DESC;

-- Exer 4

SELECT
    t.`name`,
    t.location,
    m.title,
    m.director,
    m.`year`,
    m.length_minutes
FROM
	Pixar.Theater AS `t`
		left JOIN
    Pixar.Movies AS `m`
	ON t.id = m.theater_id
order by t.`name`;

-- Exer 5

SELECT
    t.`name`,
    t.location,
    m.title,
    m.director,
    m.`year`,
    m.length_minutes
FROM
	Pixar.Theater AS `t`
		right JOIN
    Pixar.Movies AS `m`
	ON t.id = m.theater_id
order by t.`name`;


-- Exer 6

-- SUBQUERY

SELECT 
    title
FROM
    Movies
WHERE
    id IN (SELECT 
            movie_id
        FROM
            BoxOffice
        WHERE
            rating > 7.5);

-- INNER JOIN

SELECT m.title
	FROM Movies AS `m`
    INNER JOIN BoxOffice AS `b`
    ON m.id = b.movie_id
    WHERE b.rating > 7.5;

-- Exer 7

SELECT
	rating
from
	Pixar.BoxOffice
WHERE
	movie_id IN (SELECT
					id
				FROM
					Pixar.Movies
				WHERE year > 2009);

-- INNER JOIN

SELECT b.rating
	FROM Movies AS `m`
    INNER JOIN BoxOffice AS `b`
    ON m.id = b.movie_id
    WHERE m.year > 2009;

-- Exer 8

SELECT 
    t.name, t.location
FROM
    Theater AS t
WHERE
    EXISTS( SELECT 
            *
        FROM
            Movies
        WHERE
            Movies.theater_id = t.id);

-- Negação da EXISTS

SELECT 
    t.name, t.location
FROM
    Theater AS t
WHERE
  NOT  EXISTS( SELECT 
            *
        FROM
            Movies
        WHERE
            Movies.theater_id = t.id);