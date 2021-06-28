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

		$name= $_FILES['file']['name'];

		$tmp_name= $_FILES['file']['tmp_name'];

		$position= strpos($name, ".");

		$fileextension= substr($name, $position + 1);

		$fileextension= strtolower($fileextension);


		if(isset($name)) 
		{
			$path= '../Product/uploads/';
			if(empty($name))
			{
				echo "Please choose a file";
			}
			else if(!empty($name))
			{
				if(($fileextension !== "jpg") && ($fileextension !== "jpeg") && ($fileextension !== "png") && ($fileextension !== "bmp"))
				{
					echo "The file extension must be .jpg, .jpeg, .png, or .bmp in order to be uploaded";
				}

				else if (($fileextension == "jpg") || ($fileextension == "jpeg") || ($fileextension == "png") || ($fileextension == "bmp"))
				{
					if (move_uploaded_file($tmp_name, $path.$name)) 
					{
						echo 'Uploaded!';
					}
				}
			}
		}


		$database=new dbConnection();
		$sqlid="SELECT bk_id FROM benutzerkonto WHERE bname='$username'";
		foreach($database->conn->query($sqlid) as $row)
		{
			$id=$row['bk_id'];
		}

		$update=$database->updateAnzeige($_POST['produkt_id'],$_POST['pname'],$_POST['beschreibung'],$_POST['preis'], $name, $_POST['pn']);
		header("location:../Userdata/AnzeigenBearbeiten.php");
	}