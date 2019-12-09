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
  <table class="table">
    <tr>
      <td>SCORE</td><td><?=$scoreOld?></td><td><?php
      if ($score - $scoreOld > 0) {$bla = $score - $scoreOld; echo "+".$bla;} else {echo $score - $scoreOld;}
      ?></td><td><?=$score?></td>
    </tr>
    <tr>
      <td>ACCURACY</td><td><?=$ansProcOld?></td><td><?php
      if ($ansProc - $ansProcOld > 0) {$bla = $ansProc - $ansProcOld; echo "+".$bla;} else {echo $ansProc - $ansProcOld;}
      ?></td><td><?=$ansProc?></td>
    </tr>
    <tr>
      <td>GAMES</td><td><?=$gamesOld?></td><td>+1</td><td><?=$games?></td>
    </tr>
    <tr>
      <td>PLACE</td><td>100</td><td>0</td><td>100</td>
    </tr>
  </table>

  <?php
    for ($i = 1; $i < count($answered); $i++) {

      $parsed = str_replace(" ", "_", $answered[$i]);

      echo "<div class='he'>";
      echo "<img class='flag' src='assets/images/flags/".$parsed.".png' alt='nothing here'>";
      echo "<p>".$answered[$i]."</p>";
      echo "</div>";
    }
   ?>
</body>
</html>
