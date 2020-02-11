<?php
  session_start();
  require "assets/php/functions/setConnection.php";
  $connect = setConnection();
  require "assets/php/classes/user.php";
  $user = new User($connect);
  if ($_POST["doneInFlags"] != null) $user->signIn();
 ?>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Log in</title>
    <link rel="stylesheet" href="assets/css/logPage.css">
  </head>
  <body>
    <div id="frame">
      <form role = "SignIn" id = "log_menu" name="log" action="" method="post">
        <p class="label">Login</p>
        <input class="inp" type="text" name="loginInFlags" placeholder="" value="<?=$_SESSION["loginInFlags"]?>">
        <p class="error"><?=$user->$error_loginInFlags?></p>
        <p class="label" id="labPas">Password</p>
        <input class="inp" type="password" name="passInFlags" placeholder="">
        <p class="error"><?=$user->$error_passInFlags?></p>
        <input id="subm" type="submit" name="doneInFlags" value="Enter">
      </form>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="assets/js/logPage.js"></script>
  </body>
</html>
