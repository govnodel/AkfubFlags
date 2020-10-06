<?php
	function setConnection(){
		$connect = pg_pconnect("host=localhost dbname=flags user=postgres password=KLeAGFpn");
		if (!$connect) echo "Error\n";
		return $connect;
	}
?>
