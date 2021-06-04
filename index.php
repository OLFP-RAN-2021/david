<?php

header("Access-Control-Allow-Origin: *");

    if (isset($_FILES['files'])) {

        if (isset($_POST['email']))
        {
            $email=$_POST['email'];
        }
        $_SESSION['email']=$email;
        
        $nbfiles = count($_FILES['files']['tmp_name']);

        for ($i = 0; $i < $nbfiles; $i++) {
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

        // Create the Transport
$transport =(new Swift_SmtpTransport('smtp.gmail.com', 465,"ssl"))
->setUsername('nomnomdejautiliser@gmail.com')
->setPassword('12password34');

// // Create the Mailer using your created Transport
$mailer = new Swift_Mailer($transport);

// // Create a message
$message = (new Swift_Message('Et hop un lien pour tes fichiers !!'))
->setFrom(['john@doe.com' => 'Dada du 68 :)'])
->setTo([$email])
->setBody('http://127.0.0.1/transfert/telechargements/');

// Send the message
$result = $mailer->send($message);

}
   echo($email);

?>