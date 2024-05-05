const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Define endpoint to handle form submissions
app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    // Configuration for your email service (e.g., Gmail)
    service: "gmail",
    auth: {
      user: "sd.jethro@gmail.com", // Your email address
      pass: "09194453558qS", // Your email password or app-specific password
    },
  });

  // Email content
  const mailOptions = {
    from: "sd.jethro@gmail.com",
    to: "jethro.sora@gnail.com", // Email address where you want to receive submissions
    subject: "New Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent:", info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
