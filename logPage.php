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
      <input type="text" name="loginIn" placeholder="Login" value="<?=$_SESSION["login"]?>">
      <p><?=$error_loginIn?></p>
      <input type="password" name="passIn" placeholder="Password">
      <p><?=$error_passIn?></p>
      <input type="submit" name="doneIn" value="Enter">
    </form>
</body>
</html>
