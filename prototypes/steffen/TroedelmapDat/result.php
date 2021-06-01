<!DOCTYPE html>
<html>
<head>
	<title>Benutzereinsicht</title>
	<meta charset="UTF-8">
</head>
<body>
	<?php
		require('Konto/user.php');
		require('Product/product.php');
		require('Userdata/userdata.php');

		require('dbConnect.php');
		$database=new dbConnection();
		$result=$database->add_user($_POST['username'], $_POST['email'], $_POST['passwort']);

		if($result){
			echo "<p>Daten wurden erfolgreich gespeichert.<p>";
		}
		else{
			echo "<p>Daten konnten nicht gespeichert werden<p>";
		}

		$result=$database->add_product($_POST['productname'], $_POST['beschreibung'], $_POST['preis'], $_POST['bild']);

		if($result){
			echo "<p>Daten wurden erfolgreich gespeichert.<p>";
		}
		else{
			echo "<p>Daten konnten nicht gespeichert werden<p>";
		}

		$result=$database->add_userdata($_POST['strasse'], $_POST['plz'], $_POST['ort'], $_POST['telefon']);

		if($result){
			echo "<p>Daten wurden erfolgreich gespeichert.<p>";
		}
		else{
			echo "<p>Daten konnten nicht gespeichert werden<p>";
		}
	?>

</body>
</html>