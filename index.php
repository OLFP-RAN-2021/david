<?php

use EmailSection\Email;

header("Access-Control-Allow-Origin: *");

require_once 'vendor/autoload.php';

if (isset($_FILES['files'])) {

  if (isset($_POST['email'])) {
    $email = $_POST['email'];

    // regex un jour, regex toujours !!!!
    $regex = '/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/';
    if (preg_match($regex, $email)) {

      $nbfiles = count($_FILES['files']['tmp_name']);

      for ($i = 0; $i < $nbfiles; $i++) {
        $fileName = $_FILES['files']['name'][$i];
        $fileTmp = $_FILES['files']['tmp_name'][$i];

        $file = 'Telechargements/' . $fileName;

        if (move_uploaded_file($fileTmp, $file)) {
          Email::createMessage($fileName, $email);
          echo "Upload done";
        } else {
          echo 'error';
        }
      }
    } else {
      echo "Email error";
    }
  }
}
