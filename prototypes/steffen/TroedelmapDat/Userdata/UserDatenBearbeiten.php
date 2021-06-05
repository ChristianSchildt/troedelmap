<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<a href="../Anmeldung/HelloUser.php">Zur Startseite</a><br/>
	<h2>Ihre Daten anpassen</h2>

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

		$sqlid="SELECT bk_id FROM benutzerkonto WHERE bname='$username'";
		foreach($database->conn->query($sqlid) as $row)
		{
			$id=$row['bk_id'];
		}

		$result="SELECT strasse, plz, ort, telefon FROM benutzerdaten WHERE id_benutzer='$id'";
		foreach($database->conn->query($result) as $row)
		{
			$strasse=$row['strasse'];
			$plz=$row['plz'];
			$ort=$row['ort'];
			$telefon=$row['telefon'];
		}


	}
?>

<html>
<head>
	<title></title>
</head>
<body>
	<div id="produkt-form">
		<form method="post" action="UserEditResult.php">
			<input id="strasse" type="text" name="strasse" value="<?php echo $strasse;?>"><br />
			<input id="plz" type="number" name="plz" value="<?php echo $plz;?>"><br />
			<input id="ort" type="text" name="ort" value="<?php echo $ort;?>"><br />
			<input id="telefon" type="tel" name="telefon" value="<?php echo $telefon;?>"><br />
			<button type="submit">Aenderung uebernehmen?</button>
		</form>
	</div>


</body>
</html>