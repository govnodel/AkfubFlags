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
      <td class="center">SCORE</td>
      <td class="right"><?=$_COOKIE["scoreOldInFlag"]?></td>
      <td class="center">
        <?php
          if ($_COOKIE["scoreInFlag"] - $_COOKIE["scoreOldInFlag"] > 0){
            echo "+".($_COOKIE["scoreInFlag"] - $_COOKIE["scoreOldInFlag"]);
          } else {
            echo $_COOKIE["scoreInFlag"] - $_COOKIE["scoreOldInFlag"];
          }
        ?>
      </td>
      <td class="left"><?=$_COOKIE["scoreInFlag"]?></td>
    </tr>
    <tr class="row">
      <td class="center">ACCURACY</td>
      <td class="right"><?=$_COOKIE["ansProcOldInFlag"]?></td>
      <td class="center">
        <?php
          if ($_COOKIE["ansProcInFlag"] - $_COOKIE["ansProcOldInFlag"] > 0){
            echo "+".round($_COOKIE["ansProcInFlag"] - $_COOKIE["ansProcOldInFlag"], 2);
          } else {
            echo round($_COOKIE["ansProcInFlag"] - $_COOKIE["ansProcOldInFlag"], 2);
          }
        ?>
      </td>
      <td class="left"><?=round($_COOKIE["ansProcInFlag"], 2)?></td>
    </tr>
    <tr>
      <td class="center">GAMES</td>
      <td class="right"><?=$_COOKIE["gamesOldInFlag"]?></td>
      <td class="center">+1</td>
      <td class="left"><?=$_COOKIE["gamesInFlag"]?></td>
    </tr>
    <tr class="row">
      <td class="center">PLACE</td>
      <td class="right"><?=$_COOKIE["placeOldInFlag"]?></td>
      <td class="center">
        <?php
          if ($_COOKIE["placeOldInFlag"] - $_COOKIE["placeInFlag"] > 0){
            echo "+".($_COOKIE["placeOldInFlag"] - $_COOKIE["placeInFlag"]);
          } else {
            echo ($_COOKIE["placeOldInFlag"] - $_COOKIE["placeInFlag"]);
          }
        ?>
      </td>
      <td class="left"><?=$_COOKIE["placeInFlag"]?></td>
    </tr>
  </table>
  <?php
    $answered = explode(':', $_COOKIE["answeredInFlags"]);
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
