<?php
$query = "SELECT name, pop, capital FROM flags WHERE modern = ";
$options = explode(':', $_GET["op"]);

$diff = $options[2];

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
    $query = $query."AND continent = 'Africa'";
    break;
}

$query = $query." AND difficulty = ".$diff;

$result = pg_query($connect, $query);
if (!$result) {
  echo "Error\n";
  exit;
}
?>
