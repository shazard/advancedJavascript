<?php
  
    include ('database.php');
    
    $db = dbconnect();

    if (isset($_GET['gameName'])) {
        $gameName = $_GET['gameName'];
    } else {
        $gameName = "";
    }
    if (isset($_GET['gameRating'])) {
        $gameRating = $_GET['gameRating'];
    } else {
        $gameRating = "";
    }
    if (isset($_GET['gameReview'])) {
        $gameReview = $_GET['gameReview'];
    } else {
        $gameReview = "";
    }

	
    if (isset($_GET['action'])) {
        $action = $_GET['action'];
    } else {
        $action = "list";
    }

	if ($action == "insert") {
		$query = "INSERT INTO gameReviews SET gameName = :gameName, gameRating = :gameRating, gameReview = :gameReview";
		$statement = $db->prepare ("INSERT INTO gameReviews SET gameName = :gameName, gameRating = :gameRating, gameReview = :gameReview");
                $binds = array (
                    ":gameName" => $gameName,
                    ":gameRating" => $gameRating,
                    ":gameReview" => $gameReview,           
                );
                $statement->execute($binds);
                 
	} 
        
        //not letting users delete, just saving this for possible future use
	/*else if ($action == "deleteRating"){
		$query = "DELETE FROM gameReviews WHERE gameId = :gameId";
		$statement = $db->prepare ($query);
		$statement->bindValue (":id", $_GET['id']);
		$success = $statement->execute();
	}*/
	

	// always list
    $query = "SELECT GameID, GameName, GameRating, GameReview FROM gameReviews";
    $statement = $db->prepare($query);
    $success = $statement->execute();
    
    
    $results = array();
    if ($statement->execute() && $statement->rowCount() > 0) 
    {
        $results = $statement->fetchAll(PDO::FETCH_ASSOC);
    }
   
    echo json_encode(array('Result' => $results));



