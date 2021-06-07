<?php

use EmailSection\Email;

header("Access-Control-Allow-Origin: *");

require_once 'vendor/autoload.php';

if (isset($_FILES['files'])) {

  if (isset($_POST['email'])) {
    $email = $_POST['email'];
  }

  $nbfiles = count($_FILES['files']['tmp_name']);

  for ($i = 0; $i < $nbfiles; $i++) {
    $fileName = $_FILES['files']['name'][$i];
    $fileTmp = $_FILES['files']['tmp_name'][$i];

    $file = 'Telechargements/' . $fileName;

    if (move_uploaded_file($fileTmp, $file)) {
      Email::createMessage($fileName);
      echo "Upload done";
    } else {
      echo 'upload error';
    }
  }
 
}

