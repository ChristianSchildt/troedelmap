	<?php

		require('../Konto/user.php');
		require('../dbConnect.php');
		
		$database=new dbConnection();
		#echo $nameCheck;
#
		if(isset($_POST['username']) and $_POST['username']!="" and isset($_POST['passwort']) and $_POST['passwort']!="");

		$username=$database->userCheck($_POST['username']);
		if($username==$_POST['username'])
		{
			$passwort=$database->passCheck($_POST['passwort']);
			if($passwort==$_POST['passwort'])
			{
				session_start();
				$_SESSION['sess_user']=$username;
				header("Location: HelloUser.php");
			}
			else{
				echo "<p>Passwort passt nicht zum Username<p>";
			}
		}
		else{
			echo "<p>Username oder Passwort stimmt nicht überein<p>";
		}

	

		
	?>