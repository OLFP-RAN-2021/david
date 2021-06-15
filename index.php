<?php
header("Access-Control-Allow-Origin: *");

use EmailSection\Email;

require_once 'vendor/autoload.php';

if (isset($_FILES['files'])) {

  if (isset($_POST['email'])) {
    $email = $_POST['email'];

    // regex un jour, regex toujours !!!!
    $regex = '/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/';
    if (preg_match($regex, $email)) {

      $nbfiles = count($_FILES['files']['tmp_name']);

      $message = "Lien pour télécharger le(s) fichiers : ";
      for ($i = 0; $i < $nbfiles; $i++) {
        $fileName = $_FILES['files']['name'][$i];
        $fileTmp = $_FILES['files']['tmp_name'][$i];

        $flag = false;

        $file = 'Telechargements/' . $fileName;

        if (move_uploaded_file($fileTmp, $file)) {
          $flag = true;
          $message .= 'http://127.0.0.1/transfert/telechargements/' . $fileName."\n";
          echo "Upload done";
        } else {
          echo 'error';
        }
      }
      if ($flag) {
        Email::createMessage($message, $email);
      }
    } else {
      echo "Email error";
    }
  }
}
