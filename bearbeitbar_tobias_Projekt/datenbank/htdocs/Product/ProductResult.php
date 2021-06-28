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

		$name= $_FILES['file']['name'];

		$tmp_name= $_FILES['file']['tmp_name'];

		$position= strpos($name, ".");

		$fileextension= substr($name, $position + 1);

		$fileextension= strtolower($fileextension);


		if(isset($name)) 
		{
			$path= 'uploads/';
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

		$sqlid="SELECT bk_id FROM benutzerkonto WHERE bname='$username'";
           	foreach ($database->conn->query($sqlid) as $row2) 
            {
                $id=$row2['bk_id'];
            }
		$result=$database->add_product($_POST['product'], $_POST['beschr'], $_POST['preis'], $name, $id);

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