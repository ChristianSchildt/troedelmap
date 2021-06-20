<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<a href="../Anmeldung/HelloUser.php">Zur Startseite</a><br/>

</body>
</html>
<?php
	session_start();  
	require('../dbConnect.php');
	if(!isset($_SESSION["sess_user"]))
	{  
	    header("location:../Anmeldung/Anmeldungsfenster.php");  
	}
	else 
	{
		$database=new dbConnection();
		$sql="	SELECT produkt.produkt_id, produkt.pname,benutzerkonto.bk_id, benutzerkonto.bname, benutzerdaten.bd_id FROM produkt
			 	LEFT JOIN benutzerkonto ON benutzerkonto.bk_id=produkt.id_benutzer
			 	LEFT JOIN benutzerdaten ON benutzerkonto.bk_id=benutzerdaten.id_benutzer";

			 	foreach ($database->conn->query($sql)as$row) 
			 	{
			 		echo $row['produkt_id']." ".$row['pname']." - ".$row['bk_id']." ".$row['bname'].
			 		" - ".$row['bd_id']."<br/>";
			 	}
	}

?>