DROP DATABASE IF EXISTS alarmClockDB;
CREATE DATABASE alarmClockDB;

USE alarmClockDB;

CREATE TABLE alarms (
  id INT NOT NULL AUTO_INCREMENT,
  alarmtime INT NULL,
  user varchar(20),
  PRIMARY KEY (id)
);
