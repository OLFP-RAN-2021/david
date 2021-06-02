<?php

header("Access-Control-Allow-Origin: *");


    if (isset($_FILES['files'])) {

        $files = count($_FILES['files']['tmp_name']);

        for ($i = 0; $i < $files; $i++) {
            $fileName = $_FILES['files']['name'][$i];
            $fileTmp = $_FILES['files']['tmp_name'][$i];

            $file ='Telechargements/'. $fileName;

            if (move_uploaded_file($fileTmp, $file))
            {
                echo "Upload done";
            }
            else
            {
                echo 'upload error';
            }
        }



}
    print_r($_POST['Coucou']);

?>