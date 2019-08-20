<?php
 if (isset($_POST["doneIn"])){
  $login = htmlspecialchars($_POST["loginIn"]);
  $pass = htmlspecialchars($_POST["passIn"]);
  $_SESSION["loginIn"]=$login;
  $_SESSION["passIn"]=$pass;
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
    $str = "SELECT * FROM ourusers WHERE login = ".$login;
    $query = pg_query($connect, $str);
    $numrows = pg_num_rows($query);
    if($numrows == 0){
      $error_login = "User does not exist";
    } else {
      while($row = pg_fetch_assoc($query)){
        if($row['password'] == $pass){
          header("Location: welcome.php");
        } else {
          $error_passIn = "Wrong password"
        }
      }
    }
  }
 }
 ?>
