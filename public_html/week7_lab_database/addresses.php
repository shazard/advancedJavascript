<?php
    
    include ('database.php');

    if (isset($_GET['score'])) {
        $score = $_GET['score'];
    } else {
        $score = -1;
    }
    if (isset($_GET['userName'])) {
        $userName = $_GET['userName'];
    } else {
        $userName = "";
    }
	
	if (isset($_GET['action'])) {
        $action = $_GET['action'];
    } else {
        $action = "list";
    }

	if ($action == "insert") {
		$query = "INSERT INTO scores (userName, scoreValue, scoreDate) VALUES (:userName, :scoreValue, Now())";
		$statement = $db->prepare ($query);
		$statement->bindValue (":userName", $userName);
		$statement->bindValue (":scoreValue", $score);
		$success = $statement->execute();
	} else if ($action == "delete") {
		$query = "DELETE FROM scores";
		$statement = $db->prepare ($query);
		$success = $statement->execute();
	}
	else if ($action == "deleteScore"){
		$query = "DELETE FROM scores WHERE scoreId = :scoreId";
		$statement = $db->prepare ($query);
		$statement->bindValue (":scoreId", $_GET['id']);
		$success = $statement->execute();
	}
	

	// always list
    $query = "SELECT scoreId, userName, scoreValue, scoreDate FROM scores";
    $statement = $db->prepare ($query);
    $success = $statement->execute();
    $rows = $statement->fetchAll(PDO::FETCH_ASSOC);

   
    echo json_encode(array('Result' => $rows));

?>