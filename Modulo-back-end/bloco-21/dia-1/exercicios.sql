DROP SCHEMA IF EXISTS zoologico;
CREATE SCHEMA IF NOT EXISTS Zoologico;
-- USE Zoologico; 

CREATE TABLE Animals (
	animal_id INT AUTO_INCREMENT PRIMARY KEY,
    espécie VARCHAR(100) NOT NULL,
    sexo VARCHAR(10) NOT NULL,
    idade INT NOT NULL,
	cuidador_id INT NOT NULL,
    localização VARCHAR(100) NOT NULL,
);

CREATE TABLE Gerentes (
	gerente_id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL
);

CREATE TABLE Cuidadores (
	cuidador_id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    gerente_id INT(10) NOT NULL PRIMARY KEY,
    localização VARCHAR(100) NOT NULL,
    FOREIGN KEY (gerente_id) REFERENCES Gerentes (gerente_id)
);

CREATE TABLE animal_cuidador(
	animal_id INT,
	cuidador_id INT,
	CONSTRAINT PRIMARY KEY(animal_id, cuidador_id),
	FOREIGN KEY (animal_id) REFERENCES animal (animal_id),
	FOREIGN KEY (cuidador_id) REFERENCES Cuidador (cuidador_id)
);
