<?php
  require "assets/php/functions/setConnection.php";
  $connect = setConnection();
 ?>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <?php
      if (($_COOKIE["userIdInFlags"] != "") && ($_COOKIE["statsInFlags"] != "")){
        //example 0:4:3:Spain:France:Geramny
        $query = pg_query($connect, "SELECT victories, games, percent, quantity, score FROM ourusers WHERE id = ".$_COOKIE["userIdInFlags"].";");

        while($row = pg_fetch_row($query)){//$score $ansProc $games
          $victoriesOld = $row[0];
          $gamesOld = $row[1];
          $ansProcOld = $row[2];
          $ansQuaOld = $row[3];
          $scoreOld = $row[4];
        }

        $placeQuery = pg_query($connect, "SELECT login FROM ourusers ORDER BY score DESC;");

        while ($row = pg_fetch_row($placeQuery)) {
          $i++;
          if ($row[0] == $name) {
            $placeOld = $i;
          }
        }

        $stats = explode(':', $_COOKIE["statsInFlags"]);

        $victories = $victoriesOld;

        if ($stats[0] == 1) {
          $victories = $victoriesOld + 1;
        }

        $games = $gamesOld + 1;

        $ansQua = $ansQuaOld + ($stats[1] - $stats[2]);

        $ansProc = $ansQua * 10 / $games;

        $score = $scoreOld + 100 * $stats[0] + ($stats[1] - $stats[2]) * 10;

        if (count($stats) > 3) {
          for ($i = 3; $i < count($stats); $i++) {
            $flagQuery = pg_query($connect, "SELECT rating FROM flags WHERE name = '".$stats[$i]."'");
            while($row = pg_fetch_row($flagQuery)){
              $rating = $row[0];
            }
            $rating++;
            pg_query($connect, "UPDATE flags SET rating = ".$rating." WHERE name = '".$stats[$i]."'");
          }
        }

        $result = pg_query($connect, "UPDATE ourusers SET victories = ".$victories." , games = ".$games.",
        percent = ".$ansProc.", quantity = ".$ansQua.", score = ".$score." WHERE id = ".$_COOKIE["userIdInFlags"]);

        $placeQuery = pg_query($connect, "SELECT login FROM ourusers ORDER BY score DESC;");

        while ($row = pg_fetch_row($placeQuery)) {
          $j++;
          if ($row[0] == $name) {
            $place = $j;
          }
        }

        setcookie("statsInFlags", "", time() - 3600);

        setcookie("ansProcInFlag", $ansProc, time() + 7200);
        setcookie("ansProcOldInFlag", $ansProcOld, time() + 7200);
        setcookie("scoreInFlag", $score, time() + 7200);
        setcookie("scoreOldInFlag", $scoreOld, time() + 7200);
        setcookie("gamesInFlag", $games, time() + 7200);
        setcookie("gamesOldInFlag", $gamesOld, time() + 7200);
        setcookie("placeInFlag", $place, time() + 7200);
        setcookie("placeOldInFlag", $placeOld, time() + 7200);
      }

      header("Location: http://flags.alfa-omega.pro/winornot.php");
      exit();
     ?>
  </body>
</html>
