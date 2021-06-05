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
		$_SESSION['sess_user'];

		$database=new dbConnection();
		
		$username=$_SESSION['sess_user'];
		$product;

		$sqlproduct="SELECT produkt.pname, produkt.beschreibung, produkt.preis, produkt.bildlink, produkt.id_benutzer, benutzerkonto.bk_id 
			FROM produkt 
			INNER JOIN benutzerkonto ON produkt.id_benutzer=benutzerkonto.bk_id 
			WHERE benutzerkonto.bk_id IN (	SELECT bk_id 
										FROM benutzerkonto 
										WHERE bname='$username')";
		foreach ($database->conn->query($sqlproduct) as $row)
		{
			echo $row['pname']."<br/> ".$row['beschreibung']."<br/> ".$row['preis']."<br/> ";
			#$bild=$row['bildlink'];
			echo "<img src='" . $row['bildlink'] . "' height='130' width='150'> "."<br/>";		
		}
		
	}
?>
