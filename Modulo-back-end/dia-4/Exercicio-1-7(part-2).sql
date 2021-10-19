-- exer.2

INSERT INTO Pixar.BoxOffice ( `rating`, `domestic_sales`, `international_sales`)
VALUES
(6.8, 450000000, 370000000);

-- exer.5

-- UPDATE Pixar.BoxOffice
-- SET movie_id = 9
-- WHERE rating = 6.8;

INSERT INTO Pixar.BoxOffice ( movie_id, `rating`, `domestic_sales`, `international_sales`)
VALUES
(8, 8.5, 300000000, 250000000),
(10, 7.4, 460000000, 510000000),
(11, 9.9, 290000000, 280000000);


-- exer.6

DELETE FROM Pixar.BoxOffice
WHERE movie_id = 11;

-- exer.7

DELETE FROM Pixar.BoxOffice
WHERE movie_id = 9 OR
 movie_id = 2;

SELECT * FROM Pixar.BoxOffice;