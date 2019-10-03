<?php
  insertStats($_COOKIE["statsInFlags"]);//0:4:3:Spain

  function insertStats($newStats){
    $query = pg_query($connect, "SELECT victories, games, answersProcent, answersQuantity, score FROM ourusers WHERE id = '".$_COOKIE["userIdInFlags"]."'");

    while($row = pg_fetch_row($query)){
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

    //ansProc

    $ansQua += ($stats[1] - $stats[2]);

    if (count($stats) > 3) {
      for ($i = 3; $i < count($stats); $i++) {
        $flagQuery = pg_query($connect, "SELECT rating FROM flags WHERE name = '".$stats[$i]."'");
        while($row = pg_fetch_row($flagQuery)){
          $rating = $row[0];
        }
        $rating++;
        pg_query($connect, "UPDATE flags SET rating = ".." WHERE id = 1;");
      }
    } else {

    }

    //"INSERT INTO ourusers(login, password, mail) VALUES ('$login','$pass', '$email')"

    $result = pg_query($connect, "UPDATE ourusers SET victories = , games = , answersProcent = , answersQuantity = , score =  WHERE id = 1;");

  }

 ?>
