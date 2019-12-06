<?php
  require "assets/php/connection.php";
  require "assets/php/insertStats.php";
 ?>
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
  <table>
    <tr>
      <td>SCORE</td><td><?=$scoreOld?></td><td>+200</td><td><?=$score?></td>
    </tr>
    <tr>
      <td>ACCURACY</td><td><?=$ansProcOld?></td><td>-5</td><td><?=$ansProc?></td>
    </tr>
    <tr>
      <td>GAMES</td><td><?=$gamesOld?></td><td>+1</td><td><?=$games?></td>
    </tr>
    <tr>
      <td>PLACE</td><td>10297</td><td>+142</td><td>10155</td>
    </tr>
  </table>

  <?php
    for ($i = $edge + 1; $i < count($stats); $i++) {

      $parsed = str_replace(" ", "_", $stats[$i]);

      echo "<div class='he'>";
      echo "<img class='flag' src='assets/images/flags/".$parsed.".png' alt='nothing here'>";
      echo "<p>".$stats[$i]."</p>";
      echo "</div>";
    }
   ?>
</body>
</html>
