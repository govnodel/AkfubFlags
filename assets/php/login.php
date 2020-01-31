<?php
 if (isset($_POST["doneInFlags"])){
  $login = htmlspecialchars($_POST["loginInFlags"]);
  $pass = htmlspecialchars($_POST["passInFlags"]);
  $_SESSION["loginInFlags"]=$login;
  $_SESSION["passInFlags"]=$pass;
  $error=false;
  $error_loginInFlags="";
  $error_passInFlags="";
  if(strlen($login)==0){
    $error_loginInFlags="Enter login";
    $error = true;
  }
  if (strlen($pass)==0){
    $error_passInFlags="Enter password";
    $error = true;
  }
  if (!$error){
    $query = pg_query($connect, "SELECT id, password FROM ourusers WHERE login = '".$login."'");
    $numrows = pg_num_rows($query);
    if($numrows == 0){
      $error_loginInFlags = "User does not exist";
    } else {
      while($row = pg_fetch_row($query)){
        if($row[1] == $pass){
          setcookie("userIdInFlags", $row[0]);
          header("Location: welcome.php");
        } else {
          $error_passInFlags = "Wrong password";
        }
      }
    }
  }
 }
 ?>
