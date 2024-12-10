CREATE USER 'movie_user'@'%' IDENTIFIED BY '1234';
GRANT ALL ON movieDB.* TO 'movie_user'@'%' WITH GRANT OPTION;

DROP DATABASE IF EXISTS movieDB;
CREATE DATABASE IF NOT EXISTS movieDB;

USE movieDB;

CREATE TABLE IF NOT EXISTS movie (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title varchar(20) NOT NULL,
    genre varchar(20) NULL,
    myear date NULL,
    price int null,
    photo varchar(20) NULL
);