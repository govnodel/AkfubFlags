<?php
class User{
  var $error_loginInFlags;
  var $error_passInFlags;

  function validateLogin($l){
    if(strlen($l)==0){
      $error_loginInFlags="Enter login";
      return false;
    } else return true;
  }

  function validatePassword($p){
    if (strlen($p)==0){
      $error_passInFlags="Enter password";
      return false;
    } else return true;
  }

  function signIn(){
    // echo "hi";
    $login = htmlspecialchars($_POST["loginInFlags"]);
    $pass = htmlspecialchars($_POST["passInFlags"]);
    $_SESSION["loginInFlags"]=$login;
    $_SESSION["passInFlags"]=$pass;

    if (validatePassword($pass) && validateLogin($login)){
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
}
 ?>
