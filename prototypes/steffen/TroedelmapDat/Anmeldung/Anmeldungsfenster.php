<!DOCTYPE html>
<html>
<head>
	<title>Anmeldungsfenster</title>
	<meta charset="UTF-8">
</head>
<body>

	<div id="anmeldungs-form">
		<form method="post" action="Anmeldung.php">

			<input id="username" type="text" name="username" placeholder="Username..."><br />
			<input id="passwort" type="password" name="passwort"><br />
			<button type="submit" onclick=location.href='../Produkt/Produktanlegen.php'>anmelden</button>
			<input type="button" onclick=location.href='../Konto/kontoErstellen.php'>Registrieren</button>
			
			
		</form>
	</div>

</body>
</html>