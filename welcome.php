<?php
  session_start();
 ?>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  Welcome <?php echo $_SESSION["loginInFlags"]." ".$_COOKIE["userIdInFlags"];?>
</body>
<script type="text/javascript">
  setTimeout(function(){
    window.location.href = "http://flags.alfa-omega.pro";
  }, 3400);
</script>
</html>
