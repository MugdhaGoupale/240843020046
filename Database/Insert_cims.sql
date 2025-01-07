-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: p03_cims_db
-- ------------------------------------------------------
-- Server version	8.2.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `access`
--

LOCK TABLES `access` WRITE;
/*!40000 ALTER TABLE `access` DISABLE KEYS */;
INSERT INTO `access` VALUES (1,'Admin'),(2,'Director'),(3,'IP Manager'),(4,'Project Manager'),(5,'Site Operator');
/*!40000 ALTER TABLE `access` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Cement'),(2,'Steel'),(3,'Bitumen'),(4,'Aggregates'),(5,'Blocks'),(6,'Bricks'),(7,'Stone'),(8,'Wood'),(9,'Binding Wires');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `location`
--

LOCK TABLES `location` WRITE;
/*!40000 ALTER TABLE `location` DISABLE KEYS */;
INSERT INTO `location` VALUES (1,'Kothrud','Paud Road','Pune'),(2,'Anand Nagar','Raisen road','Bhopal'),(3,'Powai','JVLR','Mumbai'),(4,'Bhawarkua','Ujjain road','Indore'),(5,'Rankala','Gangavesh road','Kolhapur');
/*!40000 ALTER TABLE `location` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `material`
--

LOCK TABLES `material` WRITE;
/*!40000 ALTER TABLE `material` DISABLE KEYS */;
INSERT INTO `material` VALUES (1,'Red Brick',6,7,'red soil brick'),(2,'Copper Wire',9,2,'1mm copper wire'),(3,'Sand',4,11,'River Sand'),(4,'Plywood Sheet',8,7,'10x10ft'),(5,'Steel Rod',2,1,'5mm steel rod');
/*!40000 ALTER TABLE `material` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `material_project`
--

LOCK TABLES `material_project` WRITE;
/*!40000 ALTER TABLE `material_project` DISABLE KEYS */;
INSERT INTO `material_project` VALUES (1,1,1,10000),(2,2,1,500),(3,3,2,150),(4,1,2,5000),(5,4,3,100);
/*!40000 ALTER TABLE `material_project` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `material_request`
--

LOCK TABLES `material_request` WRITE;
/*!40000 ALTER TABLE `material_request` DISABLE KEYS */;
INSERT INTO `material_request` VALUES (1,1,5000,22,'2024-10-11',2),(2,3,120,22,'2024-10-11',2),(3,5,50,21,'2024-12-12',1);
/*!40000 ALTER TABLE `material_request` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `project`
--

LOCK TABLES `project` WRITE;
/*!40000 ALTER TABLE `project` DISABLE KEYS */;
INSERT INTO `project` VALUES (1,'Paud road',1),(2,'JVLR Highway',3),(3,'BRTS',2);
/*!40000 ALTER TABLE `project` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `project_allocation`
--

LOCK TABLES `project_allocation` WRITE;
/*!40000 ALTER TABLE `project_allocation` DISABLE KEYS */;
INSERT INTO `project_allocation` VALUES (1,1,16,21),(2,2,17,22);
/*!40000 ALTER TABLE `project_allocation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `unit`
--

LOCK TABLES `unit` WRITE;
/*!40000 ALTER TABLE `unit` DISABLE KEYS */;
INSERT INTO `unit` VALUES (1,'tons'),(2,'Kg'),(3,'gram'),(4,'Bag'),(5,'Cu. m.'),(6,'Sq. m.'),(7,'Nos.'),(8,'Quintall'),(9,'Ltr'),(10,'ml'),(11,'Brass');
/*!40000 ALTER TABLE `unit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'123456789','Aditya','Patil','9876543210','aditya@gmail.com','Pune',1),(2,'234567890','Anish','Kulkarni','9123456789','anish@gmail.com','Satara',1),(3,'345678901','Amol','Tripathi','8765437655','amol@gmail.com','Nashik',1),(4,'456789012','Akshay','Kumar','8765432109','akshay@gmail.com','Pune',1),(5,'567890123','Amey','Patil','7654321098','amey@gmail.com','Mumbai',1),(6,'123456789','Darshan','Kumar','6543210987','darshan@gmail.com','Pune',2),(7,'234567890','Dhruv','Deshmukh','5432109876','dhruv@gmail.com','Kolhapur',2),(8,'345678901','Deepak','Singh','43210987','deepak@gmail.com','Nagpur',2),(9,'456789012','Dilip','Kumar','3210987','dilip@gmail.com','Nashik',2),(10,'567890123','Dipesh','Bhoir','32109876','dipesh@gmail.com','Pune',2),(11,'123456789','Ishaan','Pande','87654321','ishaan@gmail.com','Kolhapur',3),(12,'234567890','Ian','Singh','99220876','ian@gmail.com','Nashik',3),(13,'345678901','Ivan','Kumar','98765432','ivan@gmail.com','Nagpur',3),(14,'456789012','Issac','Newton','98761234','issac@gmail.com','Pune',3),(15,'567890123','Imran','Patil','88665678','imran@gmail.com','Mumbai',3),(16,'123456789','Prerak','Kulkarni','77445678','prerak@gmail.com','Nashik',4),(17,'234567890','Pankaj','Patil','32109887','pankaj@gmail.com','Nagpur',4),(18,'345678901','Pranav','Pande','66996543','pranav@gmail.com','Pune',4),(19,'456789012','Pratik','Kulkarni','77889034','pratik@gmail.com','Mumbai',4),(20,'567890123','Parth','Kumar','908766334','parth@gmail.com','Kolhapur',4),(21,'123456789','Sangram','Singh','88669078','sangram@gmail.com','Mumbai',5),(22,'234567890','Satish','Kumar','32109543','satish@gmail.com','Kolhapur',5),(23,'345678901','Shubham','Pande','98692324','shubham@gmail.com','Nagpur',5),(24,'456789012','Sachin','Kulkarni','82865445','sachin@gmail.com','Nashik',5),(25,'567890123','Sandeep','Singh','9773256','sandeep@gmail.com','Pune',5);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-01-03 13:53:04
