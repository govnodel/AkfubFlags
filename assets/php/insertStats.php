<?php
// $query = "SELECT name FROM flags";
// $result = pg_query($connect, $query);
// if (!$result) {
//   echo "Error\n";
//   exit;
// }
// while ($row = pg_fetch_row($result)) {
//   echo $row[0];
// }



  if (true) {$_COOKIE["userIdInFlags"] != ""
    $query = pg_query($connect, "SELECT victories FROM ourusers WHERE id = 3;");
    while ($row = pg_fetch_row($query)) {
      echo $row[0];
    }
    //insertStats($_COOKIE["statsInFlags"]);//example 0:4:3:(score):Spain
  }



  function insertStats($newStats){
    //.$_COOKIE["userIdInFlags"] | , games, answersProcent, answersQuantity, score
    $query = pg_query($connect, "SELECT id, password FROM ourusers WHERE login = 'Kaiku'");
    if (!$query) {   //D
      echo "falseSS";  //D
    } else {         //D
      echo "true";   //D
    }                //D

    while($row = pg_fetch_row($query)){
      echo "hi";     //D
      $victories = $row[0];
      $games = $row[1];
      $ansProc = $row[2];
      $ansQua = $row[3];
      $score = $row[4];
    }

    $stats = explode(':', $newStats);

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

    $result = pg_query($connect, "UPDATE ourusers SET victories = ".$victories.", games = ".$games.", answersProcent = ".$ansProc.",
        answersQuantity = ".$ansQua.", score = ".$score." WHERE id = ".$_COOKIE["userIdInFlags"]);

  }

 ?>
