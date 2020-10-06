<?php
if(($_POST["login"] == "") || ($_POST["pass"] == "")){
  echo "pizdec";
  header("Location: index.php");
} else {
  $hello = "hi ".$_POST["login"];
  echo $hello;
}
 ?>
