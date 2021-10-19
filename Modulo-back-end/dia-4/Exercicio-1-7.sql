-- Exercicio dia 19.4
-- exer.1

INSERT INTO Pixar.Movies (id, title, `year`, length_minutes)
VALUES
(8, 'Monstros SA', 2001, 92),
(9, 'Procurando Nemo', 2003, 107),
(10, 'Os Incríveis', 2004, 116),
(11, 'WALL-E', 2008, 104);

-- exer.3

UPDATE Pixar.Movies
SET director = 'Andrew Staton'
WHERE id = 9;

-- exer.4

UPDATE Pixar.Movies
SET title = 'Ratatouille',
`year` = 2007
WHERE id = 3;

-- exer.6

DELETE FROM Pixar.Movies
WHERE title = 'WALL-E';

-- exer.7

DELETE FROM Pixar.Movies
WHERE director = 'Andrew Staton';

SELECT * FROM Pixar.Movies;