<?php
class User{
  public $error_loginInFlags;
  public $error_passInFlags;
  public $connect;

  function __construct($con) {
       $this->connect = $con;
   }

  function validateLogin($l){
    if(strlen($l)==0){
      $this->error_loginInFlags="Enter login";
      return false;
    } else return true;
  }

  function validatePassword($p){
    if (strlen($p)==0){
      $this->error_passInFlags="Enter password";
      return false;
    } else return true;
  }

  function signIn(){
    $login = htmlspecialchars($_POST["loginInFlags"]);
    $pass = htmlspecialchars($_POST["passInFlags"]);
    $_SESSION["loginInFlags"] = $login;

    if ($this->validatePassword($pass) && $this->validateLogin($login)){
      $query = pg_query($this->connect, "SELECT id, password FROM ourusers WHERE login = '".$login."';");

      if (!$query) {
        echo pg_last_error($this->connect);
        echo "final error";
        exit();
      }

      $numrows = pg_num_rows($query);
      if($numrows == 0){
        $this->error_loginInFlags = "User does not exist ".$login;
      } else {
        while($row = pg_fetch_row($query)){
          echo $row[0];
          // if($row[1] == $pass){
          //   setcookie("userIdInFlags", $row[0]);
          //   header("Location: welcome.php");
          // } else {
          //   $this->error_passInFlags = "Wrong password";
          // }
        }
      }
    }
  }
}
 ?>
