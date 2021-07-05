<?php


final class SQLInterface {

    private $conn;

	public function __construct(PDO $conn){
        $this->conn = $conn;
    }
	
	public function get_user() {
		$users = [];
		$sql = "SELECT * From benutzerkonto;";
		$users = $this->conn->query($sql)->fetchAll();

		return $users;
	 }

	public function add_user($bname, $email, $passwort){
  
		if ($bname == NULL || empty($bname)){
		 return false;
		}
	 
		if ($email == NULL || empty($email)){
		return false;
		}

		if ($passwort == NULL || empty($passwort)){
		return false;
		}
	 
		$sql = "INSERT INTO benutzerkonto (bk_id, bname, email, passwort) VALUES (NULL,?,?,?) RETURNING *;";
		$statement = $this->conn->prepare($sql);
		$result = $statement->execute([$bname, $email, $passwort]);
		return $result;
	 }

	public function get_product(){

		$product = [];
		$sql = "SELECT p.*, bk.email, bd.telefon FROM produkt p INNER JOIN benutzerkonto bk ON p.id_benutzer = bk.bk_id INNER JOIN benutzerdaten bd ON bk.bk_id=bd.id_benutzer;";
		$product = $this->conn->query($sql)->fetchAll(); 

		return $product;
	}

	public function add_product($pname, $beschreibung, $preis, $strasse, $hausnr, $plz, $ort, $bild, $uID){
	 
		$sql = "INSERT INTO produkt (produkt_id, pname, beschreibung, preis, strasse, hausnr, plz, ort, bild, id_benutzer) VALUES (NULL,?,?,?,?,?,?,?,?,?) RETURNING *;";    
		$statement = $this->conn->prepare($sql);
		$result = $statement->execute([$pname, $beschreibung, $preis, $strasse, $hausnr, $plz, $ort, $bild, $uID]);
		return $result;
	}

	public function get_userdata(){

		$userdata = [];
		$sql = "SELECT * FROM benutzerdaten;";
		#$product = $this->conn->query($sql)->fetchAll(PDO::FETCH_CLASS, 'benutzerdaten'); 
		$userdata = $this->conn->query($sql)->fetchAll(); 

		return $userdata;
	}

	public function add_userdata($strasse, $plz, $ort, $telefon, $id){

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
	 
		$sql = "INSERT INTO benutzerdaten (bd_id, strasse, plz, ort, telefon, id_benutzer) VALUES (NULL,?,?,?,?,?) RETURNING *;";  
		$statement = $this->conn->prepare($sql);
		$result = $statement->execute([$strasse, $plz, $ort, $telefon,$id]);
		return $result;
	}

	public function userCheck($username)
	{
		$user=null;
		$sqluser="SELECT bname FROM benutzerkonto WHERE bname='$username';";
		foreach ($this->conn->query($sqluser) as $row) 
		{
			$user=$row['bname'];
		}
		return $user;
	}

	public function passCheck($passwort)
	{
		$pass=null;
		$sqlpass="SELECT passwort FROM benutzerkonto WHERE passwort='$passwort';";
		foreach ($this->conn->query($sqlpass) as $row) 
		{
			$pass=$row['passwort'];
		}

		return $pass;
	}

	public function userExists($username)
	{
		$correct=false;
		$sqlun="SELECT bname FROM benutzerkonto WHERE bname='$username';";
		foreach ($this->conn->query($sqlun) as $row)
		{
			$correct=true;
		}
		return $correct;
	}

	public function emailExists($email)
	{
		$correct=false;
		$sqlemail="SELECT email FROM benutzerkonto WHERE email='$email';";
		foreach ($this->conn->query($sqlemail) as $row2) 
		{
			$correct=true;

		}
		return $correct;
	}

	public function updateUser($bk_id, $bname, $email, $passwort) //gerade beim Ausprobieren
	{
		$sqlUP = "UPDATE benutzerkonto SET bname=?, email=?, passwort=? WHERE bk_id=?;";
		$statement = $this->conn->prepare($sqlUP);
		$result = $statement->execute([$bname, $email, $passwort, $bk_id]);
		return $result;
	}

	public function updateUserdata($strasse, $plz, $ort, $telefon,$id)
	{
		$sqlUP="UPDATE benutzerdaten SET strasse=?, plz=?, ort=?, telefon=? WHERE id_benutzer=? RETURNING *;";
		$statement = $this->conn->prepare($sqlUP);
		$result = $statement->execute([$strasse, $plz, $ort, $telefon,$id]);
		return $result;
	}

	public function updateAnzeige($pId, $name, $beschreibung, $preis, $strasse, $hausnr, $plz, $ort, $bild, $uID)
	{
		$sqlUP="UPDATE produkt SET pname=?, beschreibung=?, preis=?,strasse=?, hausnr=?, plz=?, ort=?, bild=?, id_benutzer=? WHERE produkt_id=?;";
		$statement = $this->conn->prepare($sqlUP);
		$result = $statement->execute([$name, $beschreibung, $preis,$strasse, $hausnr, $plz, $ort, $bild, $uID, $pId]);
		return $result;
	}

	public function deleteAnzeige($pID)
	{
		$sqlDelete="DELETE FROM produkt WHERE produkt_id=? RETURNING *;";
		$statement = $this->conn->prepare($sqlDelete);
		$statement->execute([$pID]);
		return $statement;
	}

	public function deleteUserUserdataProducts($bk_id)
	{	  
		$sqlDelete="DELETE FROM benutzerkonto WHERE bk_id=?;";
		$statement = $this->conn->prepare($sqlDelete);
		$statement->execute([$bk_id]);
		return $statement;
	}

	// public function deleteUserdata($id_benutzer)
	// {
	// 	$sqlDelete="DELETE FROM benutzerdaten WHERE id_benutzer=? RETURNING*;";
	// 	$statement = $this->conn->prepare($sqlDelete);
	// 	$statement->execute([$id_benutzer]);
	// 	return $statement;
	// }

	public function joinUserWithUserdata($bd_id) //funktioniert die?
	{
		$sqlJoin = "SELECT bk.bname, bk.email, bd.strasse, bd.plz, bd.ort, bd.telefon, bd.id_benutzer 
					FROM benutzerkonto bk 
					INNER JOIN benutzerdaten bd ON bk.bk_id=bd.id_benutzer 
					WHERE bd.bk_id IN (SELECT bd_id FROM benutzderdaten WHERE bd_id=?);";
		$statement = $this->conn->prepare($sqlJoin);
		$result = $statement->execute([$bd_id]);
		return $statement;
	}



	 ////////SQL Beispielcode///////
	
    public function selectToDos(){
        $sql = "SELECT * FROM ToDo;";
        return $this->conn->query($sql);
    }

    public function deleteToDo($id){

        $sql = "DELETE FROM ToDo WHERE id = ? RETURNING *;";
        $stmt = $this->conn->prepare($sql);
        $stmt->execute([$id]);
        return $stmt;
    }

    public function insertToDo($todo){
        $sql = "INSERT INTO ToDo(descr) VALUES(?) RETURNING *;";
        $stmt = $this->conn->prepare($sql);
        $stmt->execute([$todo["descr"]]);
        return $stmt;
    }

}