<?php   
	session_start();  
	if(!isset($_SESSION["sess_user"]))
	{  
	    header("location:../Anmeldung/Anmeldungsfenster.php");  
	}
	else 
	{  
		
?> 

<!DOCTYPE html>
<html>
<head>
	<title>Produkt anbieten</title>
	<meta charset="UTF-8">
</head>
<body>

	<div id="produkt-form">
		<form method="post" action="ProductResult.php" enctype="multipart/form-data">

			<input id="product" type="text" name="product" placeholder="Produktname..."><br />
			<input id="beschreibung" type="text" name="beschr" placeholder="Beschreibung"><br />
			<input id="preis" type="number" step="0.01" name="preis"><br />
			<input id="bild" type="file" name="bild" placeholder="Laden Sie ein Bild hoch"><br />
			<button type="submit">Produkt hochladen</button>
		
		</form>
	</div>

</body>
</html>

<?php
	}
?>