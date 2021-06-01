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

		$sqlproduct="SELECT produkt.pname, produkt.beschreibung, produkt.preis, produkt.bild, produkt.id_benutzer, benutzerkonto.id 
			FROM produkt 
			INNER JOIN benutzerkonto ON produkt.id_benutzer=benutzerkonto.id 
			WHERE benutzerkonto.id IN (	SELECT id 
										FROM benutzerkonto 
										WHERE bname='$username')";
		foreach ($database->conn->query($sqlproduct) as $row)
		{
			echo $row['pname']."<br/> ".$row['beschreibung']."<br/> ".$row['preis']."<br/> ";
			echo '<img src="data:image/jpeg;base64,'.base64_encode( $row['bild'] ).'"/>';
		}
		
	}
?>