
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Winner winner chicken dinner</title>
  <link rel="stylesheet" href="assets/css/Winornotpage.css">
</head>
<body>
  <h1 class="title">TEST</h1>
  <?php
    setcookie("test", "kol", time() + (86400 * 30), "/");
    echo "statsT:" . htmlspecialchars($_COOKIE["test"]);
   ?>
</body>
</html>
