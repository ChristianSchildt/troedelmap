<!DOCTYPE html>
<html>
<head>
	<title>Benutzerkonto erstellen</title>
	<meta charset="UTF-8">

		<script type="text/javascript">
		function validateForm(){
			var x=document.forms['kontoform']['username'].value;
			if(x=="")
			{
				alert("Username muss eingegeben werden");
				return false;
			}
				
			var y=document.forms['kontoform']['email'].value;
			if(y=="")
			{
				alert("Email muss eingegeben werden");
				return false;
			}	

			var z=document.forms['kontoform']['passwort'].value;
			if(z=="")
			{
				alert("Passwort muss eingegeben werden");
				return false;
			}
				
		}
	</script>

</head>
<body>

	<h2>PHP Form Validation Example</h2>
	<form method="post" onsubmit="return validateForm()" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">  
	  Name: <input id="name" type="text" name="name">
	  <br><br>
	  E-mail: <input id="email" type="text" name="email">
	  <br><br>
	  Passwort: <input id=passwort type="password" name="passwort">
	  <br><br>
	  <input type="submit" name="submit" value="Registrieren">  
	</form>

<?php
	$name = $email = $passwort = "";
	require('user.php');
	require('../dbConnect.php');
	$database=new dbConnection();
	
	if ($_SERVER["REQUEST_METHOD"] == "POST") 
	{
	  	$name = input($_POST["name"]);
	  	$email = input($_POST["email"]);
	  	$pass = input($_POST["passwort"]);
		$uExists=$database->userExists($_POST['name']);
		$eExists=$database->emailExists($_POST['email']);

		if($uExists==true)
		{
			echo "<p>Username bereits vorhanden<p>";
		}
		elseif ($eExists==true) {
			
			echo "<p>Email bereits vorhanden<p>";
		}
		else
		{
			$result=$database->add_user($_POST['name'], $_POST['email'], $_POST['passwort']);
			if($result)
			{
				header("Location: ../Anmeldung/Anmeldungsfenster.php");
			}
			else
			{
				echo "<p>Daten konnten nicht gespeichert werden<p>";
			}
		}
	}

	function input($data) 
	{
	  $data = trim($data);
	  $data = stripslashes($data);
	  $data = htmlspecialchars($data);
	  return $data;
	}
?>


</body>
</html>