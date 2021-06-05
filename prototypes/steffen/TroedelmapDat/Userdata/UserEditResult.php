<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<a href="../Anmeldung/HelloUser.php">Zur Startseite</a><br/>
	<h2>Ihre Anzeigen anpassen</h2>

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
		$username=$_SESSION['sess_user'];
		$id;

		$database=new dbConnection();
		$sqlid="SELECT bk_id FROM benutzerkonto WHERE bname='$username'";
		foreach($database->conn->query($sqlid) as $row)
		{
			$id=$row['bk_id'];
		}

		$update=$database->updateUser($_POST['strasse'],$_POST['plz'],$_POST['ort'],$_POST['telefon'], $id);
		header("location:../Userdata/UserDatenbearbeiten.php");
	}