<?php
  session_start();
  require "assets/php/connection.php";
  require "assets/php/registration.php";
 ?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Registration</title>
  <link rel="stylesheet" href="assets/css/registration.css">
</head>
<body>
    <form role = "SignUp" id = "reg_menu" name="reg" action="" method="post">
      <input type="text" name="email" placeholder="Email" value="<?=$_SESSION["email"]?>">
      <p><?=$error_email?></p>
      <input type="text" name="login" placeholder="Login" value="<?=$_SESSION["login"]?>">
      <p><?=$error_login?></p>
      <input type="password" name="pass" placeholder="Password">
      <p><?=$error_pass?></p>
      <input type="password" name="verif" placeholder="Repeat password">
      <p><?=$error_verif?></p>
      <input type="submit" name="done" value="Enter">
    </form>
</body>
</html>
