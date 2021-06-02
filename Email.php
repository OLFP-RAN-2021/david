<?php

require_once 'vendor/autoload.php';

// Create the Transport
$transport = (new Swift_SmtpTransport('smtp.gmail.com', 465,"ssl"))
  ->setUsername('nomnomdejautiliser@gmail.com')
  ->setPassword('12password34')
;

// Create the Mailer using your created Transport
$mailer = new Swift_Mailer($transport);

// Create a message
$message = (new Swift_Message('Et hop un lien pour tes fichiers !!'))
  ->setFrom(['Ontransfertrien'])
  ->setTo(['david.b@jagware.org'])
  ->setBody('Here is the message itself')
  ;

// Send the message
$result = $mailer->send($message)




?>
