<?php
$query = "SELECT name FROM flags WHERE modern = ";
$options = explode(':', $_GET["op"]);

$diff = 1;

switch ($options[0]) {
  case "m":
    $query = $query."true";
    break;
  case "h":
    $query = $query."false";
    break;
}

switch ($continent) {
  case "o":
    break;
  case "a":
    $query = $query.", continent = 'Africa'";
    break;
}

$query = $query.", difficulty = ".$diff;

$result = pg_query($connect, $query);
if (!$result) {
  echo "Error\n";
  exit;
}
?>
