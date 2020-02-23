<?php
  require "assets/php/functions/setConnection.php";
  $connect = setConnection();

  $authorized = false;

  $place = 0;
  $games = 0;
  $victories = 0;
  $accuracy = 0;
  $score = 0;
  $name = "Error";

  if ($_COOKIE["userIdInFlags"] != "") {
    $authorized = true;

    $query = pg_query($connect, "SELECT games, victories, percent, score, login FROM ourusers WHERE id = ".$_COOKIE["userIdInFlags"].";");

    while($row = pg_fetch_row($query)){
      $place = 0;
      $games = $row[0];
      $victories = $row[1];
      $accuracy = $row[2];
      $score = $row[3];
      $name = $row[4];
    }
  }



 ?>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>AkfubFlags</title>
  <link rel="stylesheet" href="assets/css/mainss.css">
</head>
<body>
  <div id="first">
    <h1>WELCOME</h1>
    <h1>to AkfubFlags</h1>
    <h4>Let's start</h4>
    <svg id = "buttonscroll"
       viewBox="0 0 451.847 451.847"
       onclick="slowScroll()">
    <g transform="matrix(0.39836581,0,0,0.38825076,132.10826,144.2361)">
    	<path d="m 186.86879,791.26871 c -90.307199,0 -173.520872,-12.13198 -246.380416,-45.69229 L -2143.1073,-150.0312 c 0,0 -79.1581,-81.76849 8.7112,-184.98223 94.3893,-58.18359 140.4548,-32.61512 278.2917,25.56842 L 186.95048,546.09801 2363.249,-309.44501 c 137.8252,-58.18354 192.255,-85.21932 258.5071,-5.51408 48.2708,90.46614 -5.728,160.52513 -23.4894,167.37357 L 436.27325,745.08729 c -94.67248,31.55794 -159.13048,46.18142 -249.40446,46.18142 z"
       style="fill:#ffffff"/>
    </g>
    </svg>
  </div>
  <div id="second">
    <div id="profilemenu">
      <div id="logRegMenu">
        <?php
          if ($authorized) {
            echo "<p>".$name."</p>";
          } else {
            echo "<h1 id = 'login'>Log in</h1>";
            echo "<h2 id = 'register'>or <label for='nothing' class = 'HochuCursor'>REGISTER</label> now</h2>";
          }
        ?>
      </div>
      <?php if ($authorized) {
        echo "<div id='stats'>";
          echo "<p id='place'>Place <label>".$place."</label></p>";
          echo "<p id='games'>Games <label>".$games."</label></p>";
          echo "<p id='victories'>Victories <label>".$victories."</label></p>";
          echo "<p id='accuracy'>Accuracy <label>".$accuracy."</label>%</p>";
          echo "<p id='score'>Score <label>".$score."</label></p>";
        echo "</div>";
      } else {

      }
      ?>

    </div>
    <svg id="buttonprofile" x = "0" y = "0" width="90px" height="150px">
      <polyline id = "proArrow" points="30,50 55,75 30,100" stroke="white" stroke-width="10" fill = "none">
    </svg>
    <svg id="buttonplay" x = "0" y = "0">
      <circle cx = "225" cy = "225" r = "210" fill="none" stroke="white"/>
      <polygon points="156,355 156,95 364,225" fill = "none" stroke="white"/>
    </svg>
  </div>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="assets/js/mainScripts.js"></script>
</body>
</html>
