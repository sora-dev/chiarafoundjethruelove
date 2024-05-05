<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    //Get Input
    $name = $_POST['Name'];
    $attend = isset($_POST['Attend_wedding']) ? $_POST['Attend_wedding'] : '';
    $message = $_POST['Message'];

    // Create a new PHPMailer instance
    $mail = new PHPMailer();

    // Set the mailer to use SMTP
    $mail->isSMTP();

    // Configure SMTP settings
    $mail->Host = 'smtp.titan.email'; // Replace with your SMTP server
    $mail->SMTPAuth = true;
    $mail->Username = 'no-reply@kleenchimney.com'; // Replace with your SMTP username
    $mail->Password = '0$P5Q1x7DXn$'; // Replace with your SMTP password
    $mail->SMTPSecure = 'ssl'; // If required (e.g., 'ssl' or 'tls')
    $mail->Port = 465; // Replace with your SMTP port

    // Set the sender and recipient
    $mail->addAddress('sd.jethro@gmail.com');

    // Set email subject and body
    $mail->Subject = 'Kleen Chimney RSVP';
    $mail->Body = '
        <p><strong>Name: </strong> ' . $name . '</p>
        <p><strong>Attend wedding: </strong> ' . $attend . '</p>
        <p><strong>Message: </strong> ' . $message . '</p>
    ';

    // Set email format to HTML
    $mail->isHTML(true);

    // Send the email
    if ($mail->send()) {
        echo "The email message was sent.";
    } else {
        echo "The email message was not sent. Error: " . $mail->ErrorInfo;
    }
    exit; // Prevent further execution of HTML code after form submission
}
?>