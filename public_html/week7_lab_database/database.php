<?php
$dsn = 'mysql:host=localhost;dbname=javascriptwinter2015';
$username = 'root';
$password = '';
$options = array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);
$db = new PDO($dsn, $username, $password, $options);



?>