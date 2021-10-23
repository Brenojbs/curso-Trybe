-- Exer 0

-- USE sakila;
DELIMITER $$
CREATE PROCEDURE ShowTop10Actor()
BEGIN
	SELECT actor_id, COUNT(*) AS 'quantidae de filmes'
    FROM film_actor
    GROUP BY actor_id
    ORDER BY COUNT(*) DESC
    LIMIT 10;
END $$
DELIMITER ;

CALL ShowTop10Actor();


-- //////////////////////////////////////////////////////////////////////////////////////////////


-- Exer 1

-- USE BeeMovies;
DELIMITER $$
CREATE TRIGGER trigger_movies_insert
	BEFORE INSERT ON movies
    FOR EACH ROW
BEGIN
	SET NEW.release_year = Year(now());
END $$
DELIMITER ;

-- INSERT INTO movies (movie_id)
-- VALUE (11);

DELIMITER $$
CREATE TRIGGER trigger_movie_log_insert
	AFTER INSERT ON movies
    FOR EACH ROW
BEGIN
	INSERT INTO movies_logs(movie_id, executed_action, log_date)
    VALUES(NEW.movie_id, 'INSERT', NOW());
END $$
DELIMITER ;

-- Exer 2

UPDATE movies
	SET ticket_price = 11
WHERE movie_id = 11;

DELIMITER $$
CREATE TRIGGER trigger_movie_update
	BEFORE UPDATE ON movies
    FOR EACH ROW
BEGIN
	SET NEW.ticket_price_estimation = IF(NEW.ticket_price > OLD.ticket_price, 'Increasing', 'Decreasing');
    INSERT INTO movies_logs(movie_id, executed_action, log_date)
    VALUES(NEW.movie_id, 'UPDATE', NOW());
END $$
DELIMITER ;


-- Exer 3

DELETE FROM movies
WHERE movie_id = 6;

DELIMITER $$

CREATE TRIGGER trigger_movie_delete
	BEFORE DELETE ON movies
	FOR EACH ROW
BEGIN
	INSERT INTO movies_logs(movie_id, executed_action, log_date)
    VALUES(OLD.movie_id, 'DELETE', NOW());
END $$

DELIMITER ;