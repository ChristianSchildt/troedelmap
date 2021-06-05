<!DOCTYPE html>
<html>
<head>
	<title>Benutzereinsicht</title>
	<meta charset="UTF-8">
</head>
<body>
	<?php
	session_start();  
	require('../dbConnect.php');
	require('product.php');
	if(!isset($_SESSION["sess_user"]))
	{  
	    header("location:../Anmeldung/Anmeldungsfenster.php");  
	}
	else 
	{ 
		$database=new dbConnection();
		$username=$_SESSION['sess_user'];
		$id;

		$sqlid="SELECT bk_id FROM benutzerkonto WHERE bname='$username'";
           	foreach ($database->conn->query($sqlid) as $row2) 
            {
                $id=$row2['bk_id'];
            }
		$result=$database->add_product($_POST['product'], $_POST['beschr'], $_POST['preis'], $_POST['bild'], $id);

		if($result){
			echo "<p>Daten wurden erfolgreich gespeichert.<p>";
			header("Location: ../Anmeldung/HelloUser.php");
		}
		else{
			echo "<p>Daten konnten nicht gespeichert werden<p>";
		}

	}
	?>

</body>
</html>