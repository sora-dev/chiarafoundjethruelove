const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.post("/api/send-email", async (req, res) => {
  const { name, attendWedding, message } = req.body;

  // Create a transporter using Gmail SMTP
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "sd.jethro@gmail.com",
      pass: "09194453558q",
    },
  });

  // Email message options
  const mailOptions = {
    from: "sdjethro@gmail.com",
    to: "jethro.sora@gmail.com",
    subject: "New RSVP Form Submission",
    html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Attendance:</strong> ${attendWedding}</p>
               <p><strong>Message:</strong> ${message}</p>`,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("An error occurred while sending the email");
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
