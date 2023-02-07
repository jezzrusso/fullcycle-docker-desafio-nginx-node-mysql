
CREATE DATABASE IF NOT EXISTS nodedb;
USE nodedb;
CREATE USER IF NOT EXISTS nodeapp IDENTIFIED WITH mysql_native_password BY 'nodeapp';
CREATE TABLE IF NOT EXISTS nodedb.people (peopleId int NOT NULL AUTO_INCREMENT, name varchar(255), PRIMARY KEY (peopleId));
GRANT SELECT, INSERT ON nodedb.people TO nodeapp;