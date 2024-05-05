<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

//Get Input
$city = $_POST['city'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$addr = $_POST['addr'];
$msg = $_POST['msg'];

// Create a new PHPMailer instance
$mail = new PHPMailer();

// Set the mailer to use SMTP
$mail->isSMTP();

// Configure SMTP settings
$mail->Host = 'mail.kleengreen.org'; // Replace with your SMTP server
$mail->SMTPAuth = true;
$mail->Username = 'no-reply@kleengreen.org'; // Replace with your SMTP username
$mail->Password = '},Dw=Am%#TVY'; // Replace with your SMTP password
$mail->SMTPSecure = 'ssl'; // If required (e.g., 'ssl' or 'tls')
$mail->Port = 465; // Replace with your SMTP port

// Set the sender and recipient
$mail->setFrom('no-reply@kleengreen.org');
$mail->addAddress('kleenhomeservices@gmail.com');

// Set email subject and body
$mail->Subject = 'Kleengreen ' . $city ;
$mail->Body = '
<p><strong>Email: </strong> ' . $email . '</p>
<p><strong>Phone Number: </strong> ' . $phone . '</p>
<p><strong>Address: </strong> ' . $addr . '</p>
<p><strong>Message: </strong> ' . $msg . '</p>
';

// Set email format to HTML
$mail->isHTML(true);

// Send the email
if ($mail->send()) {
    echo "The email message was sent.";
} else {
    echo "The email message was not sent. Error: " . $mail->ErrorInfo;
}