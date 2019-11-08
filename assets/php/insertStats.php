<?php
  if ($_COOKIE["userIdInFlags"] != "") {
    //example 0:4:3:(score):Spain
    $query = pg_query($connect, "SELECT victories, games, quantity, percent, score FROM ourusers WHERE id = ".$_COOKIE["userIdInFlags"].";");
    if (!$query) {
      echo "error";
      exit;
    }
    while($row = pg_fetch_row($query)){
      $victories = $row[0];
      $games = $row[1];
      $ansProc = $row[2];
      $ansQua = $row[3];
      $score = $row[4];
    }

    $stats = explode(':', $_COOKIE["statsInFlags"]);

    if ($stats[0] == 1) {
      $victories++;
    }

    $games++;

    $ansQua += ($stats[1] - $stats[2]);

    $ansProc = (($ansProc * ($games - 1)) + $ansQua * 10) / $games;

    $score += ($ansQua * 10);

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

    $result = pg_query($connect, "UPDATE ourusers SET victories = ".$victories.", games = ".$games.", percent = ".$ansProc.",
        quantity = ".$ansQua.", score = ".$score." WHERE id = ".$_COOKIE["userIdInFlags"]);

    echo $victories;
    echo $games;
    echo $ansProc;
    echo $ansQua;
    echo $score;
  }
 ?>
