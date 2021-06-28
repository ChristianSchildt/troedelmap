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

		$database=new dbConnection();
		
		$username=$_SESSION['sess_user'];
		$id;
		$p_name;

		echo "Welche Anzeige soll bearbeitet werden?<br/>";
	
		$sqlid="SELECT benutzerkonto.bk_id FROM benutzerkonto
		INNER JOIN produkt ON produkt.id_benutzer=benutzerkonto.bk_id WHERE bname='$username'";
		foreach($database->conn->query($sqlid) as $row)
		{
			$id=$row['bk_id'];
		}

		foreach ($_POST['name'] as $key => $val) 
		{
			$p_name=$_POST['name'][$key];
			echo $_POST['name'][1];
		}

		$result="SELECT * FROM produkt WHERE id_benutzer='$id' AND pname='$p_name'";
		foreach($database->conn->query($result) as $row)
		{
			$name=$row['pname'];
			$beschreibung=$row['beschreibung'];
			$preis=$row['preis'];
			$bild=$row['bild'];	
			$idB=$row['id_benutzer'];

		}
	
	}

?>

<html>
<head>
	<title></title>
</head>
<body>

	<div id="produkt-form">
		<form method="post" action="AnzeigenEditResult.php" enctype="multipart/form-data">
			<input id="pname" type="text" name="pname" value="<?php echo $name;?>"><br />
			<input id="beschreibung" type="textarea" name="beschr" value="<?php echo $beschreibung;?>"><br />
			<input id="preis" type="number" step="0.01" name="preis" value="<?php echo $preis;?>"><br />
			<input id="bild" type="file" name="file" value="<?php echo "<img src='../Product/uploads/" . $row['bild'] . "' height='130' width='150'> "."<br/>";?>"><br />
			<input type="hidden" id="name"  name="pn" value="<?php echo $name;?>">
			<input type="submit" value="Upload"/>
		</form>
	</div>
</body>
</html>
<!-- Problem mit Auswahl von Produkten.
Kunde kann mehrere Produkte anbieten, wenn er diese ändern will muss noch eine Auswahl stattfinden -->