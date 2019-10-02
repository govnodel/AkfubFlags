<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Test</title>
</head>
<body>
  <?php
    setcookie("test", "kol", time() + (86400 * 30), "/");
    echo "statsT:" . htmlspecialchars($_COOKIE["test"]);
   ?>
  <button type="button" name="button" id="button">test</button>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="assets/js/testScripts.js"></script>
</body>
</html>
