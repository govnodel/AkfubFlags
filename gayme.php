<!DOCTYPE html>
<?php
require "assets/php/connection.php";
$result = pg_query($connect, "SELECT name FROM flags");
if (!$result) {
  echo "Error\n";
  exit;
}
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
    <svg class="kruglyash" width="70" height="70" fill = 'none'>
      <circle id = "krug" cx = "-34" cy = "34" r = "30"/>
      <text id="timer_sec" x = "26" y = "42" fill = "white" >10</text>
    </svg>
    <p id = "country">Lubava</p>
    <div id="nolifes">
      <img src="assets/images/otherimgs/nolife.png" alt="nothing here">
      <img src="assets/images/otherimgs/nolife.png" alt="nothing here">
      <img src="assets/images/otherimgs/nolife.png" alt="nothing here">
    </div>
    <div id="lifes">
      <img src="assets/images/otherimgs/1life.png" alt="nothing here">
      <img src="assets/images/otherimgs/1life.png" alt="nothing here">
      <img src="assets/images/otherimgs/1life.png" alt="nothing here">
    </div>
  </div>
  <svg id = "vsyapoloska" >
    <rect x="0" y="0" width="100%" height="10px" fill="#00236B"/>
    <rect id = "whitepoloska"  x="0" y="0" width="0%" height="10px" fill="#ffffff"/>
  </svg>
  <div id = "flags">
    <img id="_1" alt="oops" >
    <img id="_2" alt="oops" >
    <img id="_3" alt="oops" >
    <img id="_4" alt="oops" >
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
