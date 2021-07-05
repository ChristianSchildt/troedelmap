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

CREATE USER IF NOT EXISTS 'root'@'%' IDENTIFIED BY 'allgemein';

GRANT ALL PRIVILEGES ON troedelmap.* TO 'root'@'%' IDENTIFIED BY 'allgemein';
FLUSH PRIVILEGES;

USE `troedelmap`;


/* SQL Beispiel */
DROP TABLE IF EXISTS ToDo;

CREATE TABLE ToDo
(
	id INT PRIMARY KEY AUTO_INCREMENT,
	descr VARCHAR(60) NOT NULL
);

INSERT INTO ToDo VALUES(NULL, "Wohnung putzen");
INSERT INTO ToDo VALUES(NULL, "Essen kochen");
/* SQL Beispiel */


-- Exportiere Struktur von Tabelle troedelmap.benutzerdaten
CREATE TABLE IF NOT EXISTS `benutzerdaten` (
  `bd_id` int(11) NOT NULL AUTO_INCREMENT,
  `strasse` varchar(30) DEFAULT NULL,
  `plz` varchar(10) DEFAULT NULL,
  `ort` varchar(30) DEFAULT NULL,
  `telefon` varchar(20) DEFAULT NULL,
  `id_benutzer` int(11) DEFAULT NULL,
  PRIMARY KEY (`bd_id`),
  KEY `id_benutzer` (`id_benutzer`),
  CONSTRAINT `benutzerdaten_ibfk_1` FOREIGN KEY (`id_benutzer`) REFERENCES `benutzerkonto` (`bk_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- Exportiere Daten aus Tabelle troedelmap.benutzerdaten: ~3 rows (ungefähr)
/*!40000 ALTER TABLE `benutzerdaten` DISABLE KEYS */;
INSERT INTO `benutzerdaten` (`bd_id`, `strasse`, `plz`, `ort`, `telefon`, `id_benutzer`) VALUES
	(2, 'Auguststrasse', '48666', 'Muenchen', '124685165', 2),
	(3, 'Jacob-Mayer-StraÃŸe', '44783', 'Bochum', '15234984', 1);
/*!40000 ALTER TABLE `benutzerdaten` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle troedelmap.benutzerkonto
CREATE TABLE IF NOT EXISTS `benutzerkonto` (
  `bk_id` int(11) NOT NULL AUTO_INCREMENT,
  `bname` varchar(20) DEFAULT NULL,
  `email` varchar(20) DEFAULT NULL,
  `passwort` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`bk_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

-- Exportiere Daten aus Tabelle troedelmap.benutzerkonto: ~2 rows (ungefähr)
/*!40000 ALTER TABLE `benutzerkonto` DISABLE KEYS */;
INSERT INTO `benutzerkonto` (`bk_id`, `bname`, `email`, `passwort`) VALUES
	(1, 'sbischoff', 'test@email.de', 'asdasd'),
	(2, 'testuser', 'hallo@email.de', '1234'),
	(10, 'user1', 'user1@mail.com', '1111');
/*!40000 ALTER TABLE `benutzerkonto` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle troedelmap.produkt
CREATE TABLE IF NOT EXISTS `produkt` (
  `produkt_id` int(11) NOT NULL AUTO_INCREMENT,
  `pname` varchar(30) DEFAULT NULL,
  `beschreibung` varchar(120) DEFAULT NULL,
  `preis` float DEFAULT NULL,
  `strasse` varchar(30) DEFAULT NULL,
  `hausnr` varchar(10) DEFAULT NULL,
  `plz` varchar(10) DEFAULT NULL,
  `ort` varchar(30) DEFAULT NULL,
  `bild` blob DEFAULT NULL,
  `id_benutzer` int(11) DEFAULT NULL,
  PRIMARY KEY (`produkt_id`),
  KEY `id_benutzer` (`id_benutzer`),
  CONSTRAINT `produkt_ibfk_1` FOREIGN KEY (`id_benutzer`) REFERENCES `benutzerkonto` (`bk_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=latin1;

-- Exportiere Daten aus Tabelle troedelmap.produkt: ~2 rows (ungefähr)
/*!40000 ALTER TABLE `produkt` DISABLE KEYS */;
INSERT INTO `produkt` (`produkt_id`, `pname`, `beschreibung`, `preis`, `strasse`, `hausnr`, `plz`, `ort`, `bild`, `id_benutzer`) VALUES
	(49, 'Tisch', 'ein tisch aus holz', 187.69, 'Soldnerstrasse', '18', '44801', 'Bochum', _binary 0x6D6173736976686F6C7A2D74697363682D65696368652D6E6163682D6D6173732E6A7067, 1),
	(51, 'Tisch2', 'ein zweiter tisch', 187.69, 'Soldnerstrasse', '21', '44801', 'Bochum', _binary 0x313735362E706E67, 1);
/*!40000 ALTER TABLE `produkt` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
