<?php
  require "assets/php/connection.php";
  require "assets/php/insertStats.php";
 ?>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Winner winner chicken dinner</title>
  <link rel="stylesheet" href="assets/css/Winornotpage.css">
</head>
<body>
  <h1 class="title">TEST</h1>
  <?php
    for ($i = 0; $i < count($stats); $i++) {
      echo $stats[$i]." ";
    }
   ?>
</body>
</html>
