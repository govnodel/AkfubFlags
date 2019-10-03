<?php
 if (isset($_POST["doneInFlags"])){
  $login = htmlspecialchars($_POST["loginIn"]);
  $pass = htmlspecialchars($_POST["passIn"]);
  $_SESSION["loginInFlags"]=$login;
  $_SESSION["passInFlags"]=$pass;
  $error=false;
  $error_loginIn="";
  $error_passIn="";
  if(strlen($login)==0){
    $error_loginIn="Enter login";
    $error = true;
  }
  if (strlen($pass)==0){
    $error_passIn="Enter password";
    $error = true;
  }
  if (!$error){
    $query = pg_query($connect, "SELECT id, password FROM ourusers WHERE login = '".$login."'");
    $numrows = pg_num_rows($query);
    if($numrows == 0){
      $error_loginIn = "User does not exist";
    } else {
      while($row = pg_fetch_row($query)){
        if($row[1] == $pass){
          setcookie("userIdInFlags", $row[0]);
          header("Location: welcome.php");
        } else {
          $error_passIn = "Wrong password";
        }
      }
    }
  }
 }
 ?>
