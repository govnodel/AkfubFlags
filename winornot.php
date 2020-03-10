<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Winner winner chicken dinner</title>
  <link rel="stylesheet" href="assets/css/winornotpage.css">
</head>
<body>
  <?php if ($_COOKIE["userIdInFlags"] != "") {
    echo
    "<div id='nameContainer'>
      <canvas id='canvas' width='200' height='200'></canvas>
      <p id='name'>".$_COOKIE["nameOldInFlag"]."</p>
    </div>
    <div id='tableContainer'>
      <table id='table'>
        <tr>
          <td>SCORE</td>
          <td>".$_COOKIE["scoreOldInFlag"]."</td>";
              if ($_COOKIE["scoreInFlag"] - $_COOKIE["scoreOldInFlag"] > 0){
                echo "<td class='plus'>+".($_COOKIE["scoreInFlag"] - $_COOKIE["scoreOldInFlag"])."</td>";
              } else if ($_COOKIE["scoreInFlag"] - $_COOKIE["scoreOldInFlag"] == 0){
                echo "<td>".($_COOKIE["scoreInFlag"] - $_COOKIE["scoreOldInFlag"])."</td>";
              } else {
                echo "<td class='minus'>".($_COOKIE["scoreInFlag"] - $_COOKIE["scoreOldInFlag"])."</td>";
              }
              echo
          "<td>".$_COOKIE["scoreInFlag"]."</td>
        </tr>
        <tr class='row'>
          <td>ACCURACY</td>
          <td>".$_COOKIE["ansProcOldInFlag"]."%</td>";
              if ($_COOKIE["ansProcInFlag"] - $_COOKIE["ansProcOldInFlag"] > 0){
                echo "<td class='plus'>+".round($_COOKIE["ansProcInFlag"] - $_COOKIE["ansProcOldInFlag"], 2)."%</td>";
              } else if ($_COOKIE["ansProcInFlag"] - $_COOKIE["ansProcOldInFlag"] == 0){
                echo "<td>".round($_COOKIE["ansProcInFlag"] - $_COOKIE["ansProcOldInFlag"], 2)."%</td>";
              } else {
                echo "<td class='minus'>".round($_COOKIE["ansProcInFlag"] - $_COOKIE["ansProcOldInFlag"], 2)."%</td>";
              }
              echo
          "<td>".round($_COOKIE["ansProcInFlag"], 2)."%</td>
        </tr>
        <tr>
          <td>GAMES</td>
          <td>".$_COOKIE["gamesOldInFlag"]."</td>
          <td class='plus'>+1</td>
          <td>".$_COOKIE["gamesInFlag"]."</td>
        </tr>
        <tr class='row'>
          <td>PLACE</td>
          <td>".$_COOKIE["placeOldInFlag"]."</td>";
              if ($_COOKIE["placeOldInFlag"] - $_COOKIE["placeInFlag"] > 0){
                echo "<td class='plus'>+".($_COOKIE["placeOldInFlag"] - $_COOKIE["placeInFlag"])."</td>";
              } else if ($_COOKIE["placeOldInFlag"] - $_COOKIE["placeInFlag"] == 0){
                echo "<td>".($_COOKIE["placeOldInFlag"] - $_COOKIE["placeInFlag"])."</td>";
              } else {
                echo "<td class='minus'>".($_COOKIE["placeOldInFlag"] - $_COOKIE["placeInFlag"])."</td>";
              }
              echo
          "<td>".$_COOKIE["placeInFlag"]."</td>
        </tr>
      </table>
    </div>
    <div id='firstFlags'>";
        $answered = explode(':', $_COOKIE["answeredInFlags"]);
        for ($i = 1; $i < count($answered) / 2; $i++) {
          echo "<div>";
            echo "<img class='flag' width='190px' height='120px' src='assets/images/flags/".str_replace(" ", "_", $answered[$i]).".png' alt='x'>";
            if (strlen($answered[$i]) < 16) {
              echo "<div class='flagNameContainer' id='flagNameContainerHeight2'>";
            } else {
              echo "<div class='flagNameContainer' id='flagNameContainerHeight1'>";
            }
              echo "<p class='flagName'>".$answered[$i]."</p>";
            echo "</div>";
          echo "</div>";
          $j++;
        }
       echo
    "</div>
    <div id='secondFlags'>";
        for ($i = $j + 1; $i < count($answered); $i++) {
          echo "<div>";
            echo "<img class='flag' width='190px' height='120px' src='assets/images/flags/".str_replace(" ", "_", $answered[$i]).".png' alt='x'>";
            if (strlen($answered[$i]) < 16) {
              echo "<div class='flagNameContainer' id='flagNameContainerHeight2'>";
            } else {
              echo "<div class='flagNameContainer' id='flagNameContainerHeight1'>";
            }
              echo "<p class='flagName'>".$answered[$i]."</p>";
            echo "</div>";
          echo "</div>";
        }
        echo
    "</div>
    <script src='assets/js/flagConstructor.js'></script>
    <script src='assets/js/winornotpage.js'></script>";
  } else {
    echo
    "<div id='nameContainer'>
      <canvas id='canvas' width='200' height='200'></canvas>
      <a href='http://flags.alfa-omega.pro/' id='please'>Please, sign up to save your statistic</a>
    </div>
    <div id='tableContainer'>
      <table id='table'>
        <tr>
          <td>SCORE</td>";
          if ($_COOKIE["newScoreInFlag"] != 0) {
            echo "<td class='plus'>+".$_COOKIE["newScoreInFlag"]."</td>";
          } else {
            echo "<td>".$_COOKIE["newScoreInFlag"]."</td>";
          }
          echo
        "</tr>
        <tr class='row'>
          <td>ACCURACY</td>
          <td>".$_COOKIE["newAnsProcInFlag"]."%</td>
        </tr>
        <tr>
          <td>GAMES</td>
          <td class='plus'>+1</td>
        </tr>
        <tr class='row'>
          <td>PLACE</td>
          <td>X</td>
        </tr>
      </table>
    </div>
    <div id='firstFlags'>";
        $answered = explode(':', $_COOKIE["answeredInFlags"]);
        for ($i = 1; $i < count($answered) / 2; $i++) {
          echo "<div>";
            echo "<img class='flag' width='190px' height='120px' src='assets/images/flags/".str_replace(" ", "_", $answered[$i]).".png' alt='x'>";
            if (strlen($answered[$i]) < 16) {
              echo "<div class='flagNameContainer' id='flagNameContainerHeight2'>";
            } else {
              echo "<div class='flagNameContainer' id='flagNameContainerHeight1'>";
            }
              echo "<p class='flagName'>".$answered[$i]."</p>";
            echo "</div>";
          echo "</div>";
          $j++;
        }
       echo
    "</div>
    <div id='secondFlags'>";
        for ($i = $j + 1; $i < count($answered); $i++) {
          echo "<div>";
            echo "<img class='flag' width='190px' height='120px' src='assets/images/flags/".str_replace(" ", "_", $answered[$i]).".png' alt='x'>";
            if (strlen($answered[$i]) < 16) {
              echo "<div class='flagNameContainer' id='flagNameContainerHeight2'>";
            } else {
              echo "<div class='flagNameContainer' id='flagNameContainerHeight1'>";
            }
              echo "<p class='flagName'>".$answered[$i]."</p>";
            echo "</div>";
          echo "</div>";
        }
        echo
    "</div>
    <script src='assets/js/flagConstructor.js'></script>
    <script src='assets/js/winornotpage.js'></script>";
  }
  ?>
</body>
</html>
