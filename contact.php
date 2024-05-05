<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $name = $_POST['Name'];
    $attend = isset($_POST['Attend_wedding']) ? $_POST['Attend_wedding'] : '';
    $message = $_POST['Message'];

    // Create an email message
    $email_message = "Name: " . $name . "\n";
    $email_message .= "Attend wedding: " . $attend . "\n";
    $email_message .= "Message: " . $message . "\n";

    // Send the email (replace 'your-email@example.com' with your actual email address)
    $to = "jethro.sora@gmail.com";
    $subject = "New RSVP Submission";
    $headers = "From: " . $name . "\r\n" .
               "Reply-To: " . $name . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // If mail is sent successfully, return 'ok' response
    if (mail($to, $subject, $email_message, $headers)) {
        echo "ok";
    } else {
        // If there is an error sending mail, return 'error' response
        echo "error";
    }
} else {
    // If the form is not submitted via POST method, return 'error' response
    echo "error";
}
?>
