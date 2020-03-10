<?php
$query = "SELECT name, pop, capital FROM flags WHERE modern = ";
$options = explode(':', $_GET["op"]);

$diff = $options[2];

switch ($options[0]) {
  case "m":
    setcookie("modernInFlag", "MODERN", time() + 7200);
    $query = $query."true";
    break;
  case "h":
    setcookie("modernInFlag", "HISTORICAL", time() + 7200);
    $diff = 1;
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
