<!DOCTYPE html>
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
  <link rel="stylesheet" href="assets/css/gay.css">
</head>
<body bgcolor = "#E7F1F5">
  <div id="upblock">
    <svg class="kruglyash" width="91" height="91" fill = 'none'>
      <circle id = "innerCircle" cx = "-45" cy = "45" r = "40"/>
      <circle id = "circle" cx = "-45" cy = "45" r = "40"/>
      <text id="timer_sec" x = "36" y = "58" fill = "white" >10</text>
    </svg>
    <p id = "country">Lubava</p>
    <p id = "regime">MODERN|EASY</p>
    <div id="nolives">
      <img src="assets/images/otherimgs/nolife.png" alt="nothing here">
      <img src="assets/images/otherimgs/nolife.png" alt="nothing here">
      <img src="assets/images/otherimgs/nolife.png" alt="nothing here">
    </div>
    <div id="lives">
      <img src="assets/images/otherimgs/1life.png" alt="nothing here">
      <img src="assets/images/otherimgs/1life.png" alt="nothing here">
      <img src="assets/images/otherimgs/1life.png" alt="nothing here">
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
  <?php
  while ($row = pg_fetch_row($result)) {
    echo "names[names.length] =  '$row[0]';";
  }
  ?>
</script>
<script src = "assets/js/gameScripts.js"></script>
    </body>
</html>
