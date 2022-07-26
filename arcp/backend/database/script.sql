CREATE DATABASE arcp;
use arcp;

CREATE TABLE users (
    id INT(6) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(30) NOT NULL,
    password VARCHAR(30) NOT NULL,
);

CREATE TABLE projects (
    id INT(6) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL
);

CREATE TABLE curriculum (
    id INT(6) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    center VARCHAR(255) NOT NULL,
    date VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    topic VARCHAR(255) NOT NULL
);

CREATE TABLE skills (
    id INT(6) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    level INT(3) NOT NULL,
    section VARCHAR(100) NOT NULL
);

CREATE TABLE courses (
    id INT(6) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    center VARCHAR(255) NOT NULL,
    hours INT(10) NOT NULL,
    link VARCHAR(255) NOT NULL,
    hidden VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL
);

CREATE TABLE about (
    id INT(6) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    topic VARCHAR(20) NOT NULL,
    text TEXT(16380) NOT NULL,
);

SHOW TABLES;

DESCRIBE courses;
