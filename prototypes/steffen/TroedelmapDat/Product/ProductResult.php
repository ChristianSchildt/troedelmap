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

		$target_dir="uploads/";
		$location=$target_dir . basename($_FILES['bild']['name']);

		 if(move_uploaded_file($_FILES['bild']['name'], $location)) {
	      echo "The file ".  basename( $_FILES['bild']['name']). 
	      " has been uploaded";
	    } else{
	        echo "There was an error uploading the file, please try again!";
	    }

		$sqlid="SELECT id FROM benutzerkonto WHERE bname='$username'";
           	foreach ($database->conn->query($sqlid) as $row2) 
            {
                $id=$row2['id'];
            }
		$result=$database->add_product($_POST['product'], $_POST['beschr'], $_POST['preis'], $_FILES['bild']['name'], $id);

		if($result){
			echo "<p>Daten wurden erfolgreich gespeichert.<p>";
			#header("Location: ../Anmeldung/HelloUser.php");
		}
		else{
			echo "<p>Daten konnten nicht gespeichert werden<p>";
		}

	}
	?>

</body>
</html>