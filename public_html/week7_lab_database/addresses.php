<?php
    
    include ('database.php');

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
		$query = "INSERT INTO people (fName, lName, email, phone) VALUES (:fName, :lName, :email, :phone)";
		$statement = $db->prepare ($query);
		$statement->bindValue (":fName", $fName);
		$statement->bindValue (":lName", $lName);
                $statement->bindValue (":email", $email);
                $statement->bindValue (":phone", $phone);
		$success = $statement->execute();
	} /*else if ($action == "delete") {
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
    $query = "SELECT id, fName, lName, email, phone FROM scores";
    $statement = $db->prepare ($query);
    $success = $statement->execute();
    $rows = $statement->fetchAll(PDO::FETCH_ASSOC);

   
    echo json_encode(array('Result' => $rows));

?>