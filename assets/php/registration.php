<?php
 if (isset($_POST["done"])){
  $email = htmlspecialchars($_POST["email"]);
  $login = htmlspecialchars($_POST["login"]);
  $pass = htmlspecialchars($_POST["pass"]);
  $verif = htmlspecialchars($_POST["verif"]);
  $_SESSION["email"]=$email;
  $_SESSION["login"]=$login;
  $_SESSION["pass"]=$pass;
  $_SESSION["verif"]=$verif;
  $error=false;
  $error_email="";
  $error_login="";
  $error_pass="";
  $error_verif="";
  if($email==""||!preg_match("/@/",$email)){
    $error_email="Enter correct email";
    $error = true;
  }
  if(strlen($login)==0){
    $error_login="Enter login";
    $error = true;
  }
  if (strlen($pass)==0){
    $error_pass="Enter password";
    $error = true;
  }
  if (strlen($verif)==0){
    if ($pass != $verif) {
      $error_verif="Passwords not the same";
    }
    $error_pass="Enter password";
    $error = false;
  }
  if (!$error){
    // $query = mysql_query("SELECT * FROM usertbl WHEREusername='".$username."'");
    // $numrows = mysql_num_rows($query);
    header("Location: welcome.php");
    exit;
  }
 }
 ?>
