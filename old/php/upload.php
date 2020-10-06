<?php
$uploadDir = '/home/govnodel/AkfubFlags/uploads';
$uploadFile = $uploadDir.basename($_FILES['uploadfile']['name']);

echo $uploadFile;

$flag = true;
$imageType = strtolower(pathinfo($uploadFile,PATHINFO_EXTENSION));

if(isset($_POST["upsubmit"])){
    if(getimagesize($_FILES["uploadfile"]["tmp_name"]) === false) {
      echo "File is not an image";
      $flag = false;
    }
}

if (file_exists($target_file)){
    echo "Sorry, file already exists.";
    $flag = false;
}

if (!$flag){
    echo "Sorry, your file was not uploaded.";
} else {
    if (move_uploaded_file($_FILES["uploadfile"]["tmp_name"], $target_file)) {
        echo "The file has been uploaded.";
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
}
?>
