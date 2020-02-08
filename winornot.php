<?php
  require "assets/php/functions/setConnection.php";
  $connect = setConnection();
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
  <!-- <div id = "profile">
    <div id="ava">
        <img src="assets/images/otherimgs/example.jpg" >

    </div>
   <div id="name">
      Name
    </div>
  </div> -->
  <h1 class="title">TEST</h1>
  <table class="table">
    <tr>
      <td>SCORE</td>
      <td><?=$_COOKIE["scoreOldInFlag"]?></td>
      <td>
        <?php
          if ($_COOKIE["scoreInFlag"] - $_COOKIE["scoreOldInFlag"] > 0){
            echo "+".($_COOKIE["scoreInFlag"] - $_COOKIE["scoreOldInFlag"]);
          }else{
            echo $_COOKIE["scoreInFlag"] - $_COOKIE["scoreOldInFlag"];
          }
        ?>
      </td>
      <td><?=$_COOKIE["scoreInFlag"]?></td>
    </tr>
    <tr>
      <td>ACCURACY</td>
      <td><?=$_COOKIE["ansProcOldInFlag"]?></td>
      <td>
        <?php
          if ($_COOKIE["ansProcInFlag"] - $_COOKIE["ansProcOldInFlag"] > 0){
            echo "+".round($_COOKIE["ansProcInFlag"] - $_COOKIE["ansProcOldInFlag"], 2);
          }else{
            echo round($_COOKIE["ansProcInFlag"] - $_COOKIE["ansProcOldInFlag"], 2);
          }
        ?>
      </td>
      <td><?=round($_COOKIE["ansProcInFlag"], 2)?></td>
    </tr>
    <tr>
      <td>GAMES</td>
      <td><?=$_COOKIE["gamesOldInFlag"]?></td>
      <td>+1</td>
      <td><?=$_COOKIE["gamesInFlag"]?></td>
    </tr>
    <tr>
      <td>PLACE</td>
      <td>100</td>
      <td>0</td>
      <td>100</td>
    </tr>
  </table>

  <?php
    for ($i = 1; $i < count($answered); $i++) {
      echo "<div class='anss'>";
      echo "<div class='ans'>";
      echo "<img width='190px' height='120px' src='assets/images/flags/".str_replace(" ", "_", $answered[$i]).".png' alt='nothing here'>";
      echo "<p>".$answered[$i]."</p>";
      echo "</div>";
      echo "</div>";
    }
   ?>
</body>
</html>
