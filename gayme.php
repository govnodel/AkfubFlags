<!DOCTYPE html>
<?php

$conn = pg_pconnect("host=localhost dbname=flags user=postgres password=KLeAGFpn");
if (!$conn) {
  echo "Error\n";
  exit;
}

$result = pg_query($conn, "SELECT name FROM flags");
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
    echo "names[names.length] =  $row[0];";
  }
  ?>
  // names[0] = "Georgia (1918-1921)";
  // names[1] = "the Ottoman Empire";
  // names[2] = "Bavaria";
  // names[3] = "the Kingdom of the Two Sicilies (1816)";
  // names[4] = "Texas";
  // names[5] = "Hanover (1837-1866)";
  // names[6] = "Golden Horde (1339)";
  // names[7] = "the United States of the Ionian Islands";
  // names[8] = "Taiping Heavenly Kingdom";
  // names[9] = "the German Empire";
  // names[10] = "US 26 Star Flag";
  // names[11] = "Austria-Hungary (1869-1918)";
  // names[12] = "Transcaucasian SFSR (1925-1936)";
  // names[13] = "Scotland";
  // names[14] = "Rzeczpospolita";
  // names[15] = "Rwanda (1959-1961)";
  // names[16] = "Rhodesia (1968-1979)";
  // names[17] = "Republic of Maryland";
  // names[18] = "Napoleonic Kingdom of Italy";
  // names[19] = "Merina Kingdom";
  // names[20] = "German Confederation";
  // names[21] = "Crimean Khanate";
  // names[22] = "Cossack Hetmanat";
  // names[23] = "Benin Empire";
</script>
<script src = "assets/js/gameScripts.js"></script>
    </body>
</html>
