<?php   
	session_start();  
	if(!isset($_SESSION["sess_user"]))
	{  
	    header("location:Anmeldungsfenster.php");  
	}
	else 
	{  
?>  
		<!DOCTYPE html>  
		<html>  
		<head>  
		<title>Welcome</title>  
		    <style>   
		        body
		        {  
		              
				    margin-top: 100px;  
				    margin-bottom: 100px;  
				    margin-right: 150px;  
				    margin-left: 80px;  
				    background-color: azure ;  
				    color: palevioletred;  
				    font-family: verdana;  
				    font-size: 100%  
				      
				}  

				h2 
				{  
				    color: indigo;  
				    font-family: verdana;  
				    font-size: 100%;  
				}  
				        
				h1 
				{  
				    color: indigo;  
				    font-family: verdana;  
				    font-size: 100%;  
				}  
		              
          
    		</style>  
		</head>  
		<body>  
    		<center><h1>Erfolgreich angemeldet.</h1></center>  
      
      		<a href="logout.php">Logout</a> 
      		<a href="../Product/Produktanlegen.php">Produkt anlegen</a>
      		<a href="../Anzeigen/AnzeigeEigenesProdukt.php">Eigene Angebote anzeigen</a>
      		<a href="../Userdata/Userinformationen.php">Kontodaten hinzufuegen</a>
      		<a href="../Anzeigen/AnzeigeAllerProdukte.php">Alle Produkte ansehen</a>
      		<a href="../Userdata/UserDatenBearbeiten.php">Ihre Daten bearbeiten</a>
      		<a href="../Anzeigen/Anzeigenbearbeiten.php">Anzeigen bearbeiten</a>
			<h2>Hallo, <?=$_SESSION['sess_user'];?>!</h2>
		</body>  
		</html>  
<?php  
	}  
?>  