
<?php
      class dbConnection{

         public $conn;
         public function __construct()
         {
            $dbhost = 'localhost:3306';
            $dbuser = 'root';
            $dbpass = 'allgemein';
            $db ='troedelmap';

            $dsn = "mysql:host=$dbhost;port=3306;dbname=$db";

            $options = [
				PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
				PDO::ATTR_CASE => PDO::CASE_NATURAL
			];

	        try{
			 		$this->conn = new PDO($dsn, $dbuser, $dbpass, $options);
			} 
			catch(PDOException $e){
				echo "Verbindungsaufbau gescheitert: " . $e->getMessage();
			}
		}
         
         #mysqli_select_db($conn, 'troedelmap');

        function get_user() {
            $users = [];
            $sql = "SELECT * From benutzerkonto;";
            $users = $this->conn->query($sql)->fetchAll();

            return $users;
         }

        function add_user($bname, $email, $passwort){
      
            if ($bname == NULL || empty($bname)){
             return false;
            }
         
            if ($email == NULL || empty($email)){
            return false;
            }

            if ($passwort == NULL || empty($passwort)){
            return false;
            }
         
            $sql = "INSERT INTO benutzerkonto (bk_id, bname, email, passwort) VALUES (NULL,?,?,?);";  
            $statement = $this->conn->prepare($sql);
            $result = $statement->execute([$bname, $email, $passwort]);
            return $result;
         }

        function get_product(){

        	$product = [];
        	$sql = "SELECT * FROM produkt;";
        	$product = $this->conn->query($sql)->fetchAll(); 

        	return $product;
        }

        function add_product($pname, $beschreibung, $preis, $bild, $uID){

        	if ($pname == NULL || empty($pname)){
             return false;
            }
         
            if ($beschreibung == NULL || empty($beschreibung)){
            return false;
            }

            if ($preis == NULL || empty($preis)){
            return false;
            }

            if ($bild == NULL || empty($bild)){
            return false;
            }
         
            $sql = "INSERT INTO produkt (produkt_id, pname, beschreibung, preis, bildlink, id_benutzer) VALUES (NULL,?,?,?,?,?);";  
            $statement = $this->conn->prepare($sql);
            $result = $statement->execute([$pname, $beschreibung, $preis, $bild,$uID]);
            return $result;
        }

        function get_userdata(){

        	$userdata = [];
        	$sql = "SELECT * FROM benutzerdaten;";
        	#$product = $this->conn->query($sql)->fetchAll(PDO::FETCH_CLASS, 'benutzerdaten'); 
            $userdata = $this->conn->query($sql); 

        	return $userdata;
        }

        function add_userdata($strasse, $plz, $ort, $telefon, $id){

        	if ($strasse == NULL || empty($strasse)){
             return false;
            }
         
            if ($plz == NULL || empty($plz)){
            return false;
            }

            if ($ort == NULL || empty($ort)){
            return false;
            }

            if ($telefon == NULL || empty($telefon)){
            return false;
            }
         
            $sql = "INSERT INTO benutzerdaten (bd_id, strasse, plz, ort, telefon, id_benutzer) VALUES (NULL,?,?,?,?,?);";  
            $statement = $this->conn->prepare($sql);
            $result = $statement->execute([$strasse, $plz, $ort, $telefon,$id]);
            return $result;
        }

        function userCheck($username)
        {
            $user=null;
            $sqluser="SELECT bname FROM benutzerkonto WHERE bname='$username';";
            foreach ($this->conn->query($sqluser) as $row) 
            {
                $user=$row['bname'];
            }
            return $user;
        }

        function passCheck($passwort)
        {
            $pass=null;
            $sqlpass="SELECT passwort FROM benutzerkonto WHERE passwort='$passwort';";
            foreach ($this->conn->query($sqlpass) as $row) 
            {
                $pass=$row['passwort'];
            }
    
            return $pass;
        }

        function userExists($username)
        {
            $correct=false;
            $sqlun="SELECT bname FROM benutzerkonto WHERE bname='$username';";
            foreach ($this->conn->query($sqlun) as $row)
            {
                $correct=true;
            }
            return $correct;
        }

        function emailExists($email)
        {
            $correct=false;
            $sqlemail="SELECT email FROM benutzerkonto WHERE email='$email';";
            foreach ($this->conn->query($sqlemail) as $row2) 
            {
                $correct=true;

            }
            return $correct;
        }

        function updateUser($strasse, $plz, $ort, $telefon,$id)
        {
            $sqlUP="UPDATE benutzerdaten SET strasse=?, plz=?, ort=?, telefon=? WHERE id_benutzer=?";
            $statement = $this->conn->prepare($sqlUP);
            $result = $statement->execute([$strasse, $plz, $ort, $telefon,$id]);
            return $result;
        }

        function updateAnzeige($pId, $name, $beschreibung, $preis, $bild,$id,$pn)
        {
            $sqlUP="UPDATE benutzerdaten SET produkt_id=?,pname=?, beschreibung=?, preis=?, bildlink=? WHERE id_benutzer=? AND pname=?";
            $statement = $this->conn->prepare($sqlUP);
            $result = $statement->execute([$pId, $name, $beschreibung, $preis, $bild,$id,$pn]);
            return $result;
        }



      }
     
        # mysqli_close($conn);
?>