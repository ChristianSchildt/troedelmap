-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server Version:               10.5.10-MariaDB - mariadb.org binary distribution
-- Server Betriebssystem:        Win64
-- HeidiSQL Version:             11.2.0.6213
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Exportiere Datenbank Struktur für troedelmap
CREATE DATABASE IF NOT EXISTS `troedelmap` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `troedelmap`;

-- Exportiere Struktur von Tabelle troedelmap.benutzerdaten
CREATE TABLE IF NOT EXISTS `benutzerdaten` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `strasse` varchar(30) DEFAULT NULL,
  `plz` varchar(10) DEFAULT NULL,
  `ort` varchar(30) DEFAULT NULL,
  `telefon` varchar(20) DEFAULT NULL,
  `id_benutzer` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_benutzer` (`id_benutzer`),
  CONSTRAINT `benutzerdaten_ibfk_1` FOREIGN KEY (`id_benutzer`) REFERENCES `benutzerkonto` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- Daten Export vom Benutzer nicht ausgewählt

-- Exportiere Struktur von Tabelle troedelmap.benutzerkonto
CREATE TABLE IF NOT EXISTS `benutzerkonto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `bname` varchar(20) DEFAULT NULL,
  `email` varchar(20) DEFAULT NULL,
  `passwort` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

-- Daten Export vom Benutzer nicht ausgewählt

-- Exportiere Struktur von Tabelle troedelmap.produkt
CREATE TABLE IF NOT EXISTS `produkt` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pname` varchar(30) DEFAULT NULL,
  `beschreibung` varchar(120) DEFAULT NULL,
  `preis` float DEFAULT NULL,
  `bild` blob DEFAULT NULL,
  `id_benutzer` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_benutzer` (`id_benutzer`),
  CONSTRAINT `produkt_ibfk_1` FOREIGN KEY (`id_benutzer`) REFERENCES `benutzerkonto` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=latin1;

-- Daten Export vom Benutzer nicht ausgewählt

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
