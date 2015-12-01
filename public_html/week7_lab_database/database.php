<?php
$dsn = 'mysql:host=localhost;dbname=se251';
$username = 'web_user';
$password = 'pa55word';
$options = array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);
$db = new PDO($dsn, $username, $password, $options);



?>