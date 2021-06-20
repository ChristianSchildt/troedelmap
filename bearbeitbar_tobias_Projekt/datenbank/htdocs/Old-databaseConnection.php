<!DOCTYPE html>
<html>
<head>
	<title>DatabaseConnection</title>
	<meta charset="UTF-8">
</head>
<body>
	<?php

	class DatabaseConnection{
		private $connection;

		public function __construct()
		{
			$host='localhost:3306';
			$db='troedelmap';
			$user='root';
			$pw='allgemein';

			$dsn='mysql:host=$host;port=3306;dbname=$db';

			$options = [
				PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
				PDO::ATTR_CASE => PDO::CASE_NATURAL
			];

			try{
				
				$this->connection = new PDO($host, $user, $pw);
			} 
			catch(PDOException $e){
				echo "Verbindungsaufbau gescheitert: " . $e->getMessage();
			}
		}
		
		public function __destruct(){
			$this->connection = NULL;	
		}

		public function get_user() {
			$users = [];
			$sql = "SELECT bname, email, passwort From benutzerkonto;";
			$users = $this->connection->query($sql)->fetchAll(PDO::FETCH_CLASS, 'benutzerkonto');

			return $users;
		}

		public function add_user($bname, $email, $passwort){
			
			if ($bname == NULL || empty($bname)){
				return false;
			}
			
			if ($email == NULL || empty($email)){
				return false;
			}

			if ($passwort == NULL || empty($passwort)){
				return false;
			}
			
			$sql = "INSERT INTO benutzerkonto (id, bname, email, passwort) VALUES (NULL,?,?,?);";		
			$statement = $this->connection->prepare($sql);
			$result = $statement->execute([$bname, $email, $passwort]);
			return $result;
		}
	}
	?>
</body>