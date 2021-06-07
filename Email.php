<?php

require_once 'vendor/autoload.php';

class Email
{

  public static function createMessage(string $filename)
  {

    $transport = (new Swift_SmtpTransport('smtp.gmail.com', 465, "ssl"))
      ->setUsername('nomnomdejautiliser@gmail.com')
      ->setPassword('12password34');

    $mailer = new Swift_Mailer($transport);

    // // Create a message
    $message = (new Swift_Message('Et hop un lien pour tes fichiers !!'))
      ->setFrom(['Dada@hopla.com' => 'Dada du 68 :)'])
      ->setTo(['commande@jagware.org'])
      ->setBody('http://127.0.0.1/transfert/telechargements/'.$filename);

    // Send the message
    $result = $mailer->send($message);
  }
}
