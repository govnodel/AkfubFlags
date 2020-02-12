<?php
class User{
  public $error_loginInFlags;
  public $error_passInFlags;
  public $error_emailInFlags;

  public $connect;

  function __construct($con) {
       $this->connect = $con;
   }

  function validateLogin($l){
    if(strlen($l) == 0){
      $this->error_loginInFlags = "Enter login";
      return false;
    } else return true;
  }

  function validatePassword($p){
    if (strlen($p) == 0){
      $this->error_passInFlags = "Enter password";
      return false;
    } else return true;
  }

  function validateRepPassword($p, $rep){
    if ($p != $rep) {
      $this->error_passInFlags = "Passwords not the same";
      return false;
    } else return true;
  }

  function validateEmail($e){
    if (strlen($e) == 0){
      $this->error_emailInFlags = "Enter email";
      return false;
    }

    if($e == !preg_match("/@/", $e)){
      $this->error_emailInFlags = "Enter correct email";
      return false;
    }

    return true;
  }


  function signUp(){
    setcookie("enterAttempInFlags", "1");

    $email = htmlspecialchars($_POST["emailInFlags"]);
    $login = htmlspecialchars($_POST["loginRegInFlags"]);
    $pass = htmlspecialchars($_POST["passRegInFlags"]);
    $rep = htmlspecialchars($_POST["repPassInFlags"]);

    $_SESSION["loginRegInFlags"] = $login;
    $_SESSION["emailInFlags"] = $email;

    if ($this->validatePassword($pass) && $this->validateLogin($login) && $this->validateRepPassword($pass, $rep) && $this->validateEmail($email)){
      $query = pg_query($this->connect, "SELECT * FROM ourusers WHERE login = '".$login."';");

      $numrows = pg_num_rows($query);

      if($numrows == 0){
        $result = pg_query($connect, "INSERT INTO ourusers(login, password, mail) VALUES ('".$login."', '".$pass."', '".$email."');");
        $query = pg_query($connect, "SELECT id FROM ourusers WHERE login = '".$login."';");

        while($row = pg_fetch_row($query)){
          setcookie("userIdInFlags", $row[0]);
        }
        setcookie("enterAttempInFlags", "0");
        header("Location: welcome.php");
      } else {
        $this->error_loginInFlags = "Such username already exists";
      }
    }

  }

  function signIn(){
    setcookie("enterAttempInFlags", "1");

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
          if($row[1] == $pass){
            setcookie("userIdInFlags", $row[0]);
            setcookie("enterAttempInFlags", "0");
            header("Location: welcome.php");
          } else {
            $this->error_passInFlags = "Wrong password";
          }
        }
      }
    }
  }
}
 ?>
