<?php
  session_start();
  require "assets/php/functions/setConnection.php";
  $connect = setConnection();
  require "assets/php/classes/user.php";
  $user = new User($connect);
  if ($_POST["doneInFlags"] != null) $user->signUp();
 ?>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Sign Up</title>
    <link rel="stylesheet" href="assets/css/signUp.css">
  </head>
  <body>
    <div id="frame">
      <form role = "SignIn" id = "log_menu" name="log" action="" method="post">
        <p class="label">Email</p>
        <input class="inp" type="text" name="emailInFlags" placeholder="" value="<?=$_SESSION["emailInFlags"]?>">
        <p class="error"><?=$user->error_emailInFlags?>&nbsp;</p>
        <p class="label">Login</p>
        <input class="inp" type="text" name="loginRegInFlags" placeholder="" value="<?=$_SESSION["loginRegInFlags"]?>">
        <p class="error"><?=$user->error_loginInFlags?>&nbsp;</p>
        <p class="label">Password</p>
        <input class="inp" type="password" name="passRegInFlags" placeholder="">
        <p class="error"><?=$user->error_passInFlags?>&nbsp;</p>
        <p class="label">Repeat password</p>
        <input class="inp" type="password" name="repPassInFlags" placeholder="">
        <p class="error">&nbsp;</p>
        <input id="subm" type="submit" name="doneInFlags" value="Enter">
      </form>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="assets/js/signUp.js"></script>
  </body>
</html>
