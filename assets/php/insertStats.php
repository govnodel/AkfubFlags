<?php
  $answered = explode(':', $_COOKIE["answeredInFlags"]);
  if (($_COOKIE["userIdInFlags"] != "") && ($_COOKIE["statsInFlags"] != "")){
    //example 0:4:3:(score):Spain:France:Geramny
    $query = pg_query($connect, "SELECT victories, games, percent, quantity, score FROM ourusers WHERE id = ".$_COOKIE["userIdInFlags"].";");
    if (!$query) {
      echo "error";
      exit;
    }

    while($row = pg_fetch_row($query)){//$score $ansProc $games
      $victoriesOld = $row[0];
      $gamesOld = $row[1];
      $ansProcOld = $row[2];
      $ansQuaOld = $row[3];
      $scoreOld = $row[4];
    }

    $stats = explode(':', $_COOKIE["statsInFlags"]);

    $victories = $victoriesOld;

    if ($stats[0] == 1) {
      $victories = $victoriesOld + 1;
    }

    $games = $gamesOld + 1;

    $ansQua = $ansQuaOld + ($stats[1] - $stats[2]);

    $ansProc = ($ansQua / ($games * 10)) * 100;

    $score = $scoreOld;// + ($ansQua * 10)

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

    if (!$result) {
      echo "errorEnd";
      exit;
    }

    setcookie("statsInFlags", "", time() - 3600);

    $data = array($score, $scoreOld, $ansProc, $ansProcOld, $games, $gamesOld);
    setcookie("dataInFlags", $data, time() + 3600);
  }
 ?>
