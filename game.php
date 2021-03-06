<?php
  session_start();
  require "assets/php/functions/setConnection.php";
  $connect = setConnection();
  require "assets/php/gameSet.php"
?>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Game</title>
  <link rel="stylesheet" href="assets/css/game.css">
</head>
<body bgcolor = "#E7F1F5">
  <div id="upblock">
    <svg class="kruglyash" width="91" height="91" fill = 'none'>
      <circle id = "innerCircle" cx = "-45" cy = "45" r = "40"/>
      <circle id = "circle" cx = "-45" cy = "45" r = "40"/>
      <text id="timer_sec" x = "36" y = "58" fill = "white" >10</text>
    </svg>
    <p id = "country">Lubava</p>
    <?php
      if (explode(':', $_GET["op"])[0] == "m") {
        $modern = "MODERN";
        setcookie("modernInFlag", $modern, time() + 7200);
        echo "<p class='data' id='popW'>POP </p>";
        echo "<p class='data' id='pop'></p>";
        echo "<p class='data' id='capW'>CAP </p>";
        echo "<p class='data' id='cap'>Ubuntu</p>";
      } else {
        $modern = "HISTORICAL";
        setcookie("modernInFlag", $modern, time() + 7200);
        echo "<p class='data' id='datW'>DATE </p>";
        echo "<p class='data' id='dat'></p>";
        echo "<p class='data' id='capW'>CAP </p>";
        echo "<p class='data' id='cap'>Ubuntu</p>";
      }
      echo "<p class='data' id='regime'>".$modern."|EASY</p>";
    ?>
    <div id="nolives">
      <img src="assets/images/otherimgs/nolife.png" alt="nothing here">
      <img src="assets/images/otherimgs/nolife.png" alt="nothing here">
      <img src="assets/images/otherimgs/nolife.png" alt="nothing here">
    </div>
    <div id="lives">
      <img src="assets/images/otherimgs/life.png" alt="nothing here">
      <img src="assets/images/otherimgs/life.png" alt="nothing here">
      <img src="assets/images/otherimgs/life.png" alt="nothing here">
    </div>
  </div>
  <svg id = "vsyapoloska" >
    <rect x="0" y="0" width="100%" height="10px" fill="#00236B"/>
    <rect id = "progressBar"  x="0" y="0" width="0%" height="10px" fill="#ffffff"/>
  </svg>
  <div id = "flags">
    <img id="flag0" alt="" >
    <img id="flag1" alt="" >
    <img id="flag2" alt="" >
    <img id="flag3" alt="" >
  </div>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script type="text/javascript">
    var names = [];
    var pops = [];
    var capitals = [];
    var dates = [];
    var diff;
    var modern;

    <?php
      while ($row = pg_fetch_row($result)) {
        echo "names[names.length] = '$row[0]';";
        echo "pops[pops.length] = '$row[1]';";
        echo "capitals[capitals.length] = '$row[2]';";
        echo "diff = '$diff';";
        echo "modern = '$options[0]';";
        echo "dates[dates.length] = '$row[3]';";
      }
    ?>
  </script>
  <script src = "assets/js/game.js"></script>
  </body>
</html>
