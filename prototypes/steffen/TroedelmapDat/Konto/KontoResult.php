<!DOCTYPE html>
<html>
<head>
	<title>Benutzereinsicht</title>
	<meta charset="UTF-8">
</head>
<body>
	<?php
		require('user.php');
		require('../dbConnect.php');
		
		$database=new dbConnection();
		
		$result=$database->add_user($_POST['username'], $_POST['email'], $_POST['passwort']);
		if($result)
		{
			echo "<p>Daten wurden erfolgreich gespeichert.<p>";
		}
		else
		{
			echo "<p>Daten konnten nicht gespeichert werden<p>";
		}

	?>

</body>
</html>