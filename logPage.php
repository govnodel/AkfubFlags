<?php
  session_start();
  require "assets/php/functions/setConnection.php";
  $connect = setConnection();
  require "assets/php/classes/user.php";
  $user = new User;
  $user -> signIn();
 ?>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Log in</title>
  <link rel="stylesheet" href="assets/css/registration.css">
</head>
<body>
    <form role = "SignIn" id = "log_menu" name="log" action="" method="post">
      <input type="text" name="loginInFlags" placeholder="Login" value="<?=$_SESSION["loginInFlags"]?>">
      <p><?=$user->$error_loginInFlags?></p>
      <input type="password" name="passInFlags" placeholder="Password">
      <p><?=$user->$error_passInFlags?></p>
      <input type="submit" name="doneInFlags" value="Enter">
    </form>
</body>
</html>
