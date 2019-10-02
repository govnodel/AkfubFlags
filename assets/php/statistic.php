<?php
  setcookie("test","hi");
  $test = $_COOKIE["test"];
  echo $test;
  unset($_COOKIE["stats"]);
 ?>
