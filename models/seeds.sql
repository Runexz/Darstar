CREATE TABLE Classrooms
(
	id int NOT NULL AUTO_INCREMENT,
	studentid INTEGER NOT NULL,
    name varchar(100) NOT NULL,
    pillar1 INTEGER NOT NULL,
    pillar2 INTEGER NOT NULL,
    pillar3 INTEGER NOT NULL,
    pillar4 INTEGER NOT NULL,
    color VARCHAR(100) NOT NULL,
    date DATETIME NOT NULL,
    descriptioncomments VARCHAR(255) NOT NULL,
	PRIMARY KEY (id)
);