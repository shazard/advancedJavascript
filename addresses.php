<?php
    
    include ('database.php');
    
    $db = dbconnect();

    if (isset($_GET['fName'])) {
        $fName = $_GET['fName'];
    } else {
        $fName = "";
    }
    if (isset($_GET['lName'])) {
        $lName = $_GET['lName'];
    } else {
        $lName = "";
    }
    if (isset($_GET['email'])) {
        $email = $_GET['email'];
    } else {
        $email = "";
    }
    if (isset($_GET['phone'])) {
        $phone = $_GET['phone'];
    } else {
        $phone = "";
    }
	
    if (isset($_GET['action'])) {
        $action = $_GET['action'];
    } else {
        $action = "list";
    }

	if ($action == "insert") {
		$query = "INSERT INTO people SET fName = :fName, lName = :lName, email = :email, phone = :phone";
		$statement = $db->prepare ("INSERT INTO people SET fName = :fName, lName = :lName, email = :email, phone = :phone");
                $binds = array (
                    ":fName" => $fName,
                    ":lName" => $lName,
                    ":email" => $email,
                    ":phone" => $phone,                  
                );
                $statement->execute($binds);
                 
	} 
        
        /*else if ($action == "delete") {
		$query = "DELETE FROM people";
		$statement = $db->prepare ($query);
		$success = $statement->execute();
	}*/
	else if ($action == "deletePerson"){
		$query = "DELETE FROM people WHERE id = :id";
		$statement = $db->prepare ($query);
		$statement->bindValue (":id", $_GET['id']);
		$success = $statement->execute();
	}
	

	// always list
    $query = "SELECT id, fName, lName, email, phone FROM people";
    $statement = $db->prepare($query);
    $success = $statement->execute();
    
    
    $results = array();
    if ($statement->execute() && $statement->rowCount() > 0) 
    {
        $results = $statement->fetchAll(PDO::FETCH_ASSOC);
    }
   
    echo json_encode(array('Result' => $results));

