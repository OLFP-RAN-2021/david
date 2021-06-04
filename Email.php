<?php

require_once 'vendor/autoload.php';

// Class SendEmail{

// Create the Transport

// function initTransport()
// {

$transport =(new Swift_SmtpTransport('smtp.gmail.com', 465,"ssl"))
  ->setUsername('nomnomdejautiliser@gmail.com')
  ->setPassword('12password34');

// }

// // Create the Mailer using your created Transport
$mailer = new Swift_Mailer($transport);

// // Create a message
$message = (new Swift_Message('Et hop un lien pour tes fichiers !!'))
  ->setFrom(['john@doe.com' => 'Dada du 68 :)'])
  ->setTo(['commande@jagware.org'])
  ->setBody('http://127.0.0.1/transfert/telechargements/');

// Send the message
$result = $mailer->send($message);

// }

?>
