<?php
  session_start();
 ?>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="assets/css/welcome.css">
  <title>Welcome</title>
</head>
<body>
  <?php
    if ($_COOKIE["firstTimeInFlags"] == 1) {
      echo "<p class='text' id='text1'>Welcome, ".$_SESSION["loginInFlags"]."</p>";
    } else {
      echo "<p class='text' id='text2'>Welcome back, ".$_SESSION["loginInFlags"]."</p>";
    }
   ?>
</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="assets/js/welcome.js"></script>
</html>
