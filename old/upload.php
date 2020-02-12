<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <form action=assets/php/upload.php method=post enctype=multipart/form-data>
    <input type="hidden" name="MAX_FILE_SIZE" value="3000000" />
    <input type=file name=uploadfile>
    <input type=submit name="upsubmit" value=Загрузить>
  </form>
</body>
</html>
