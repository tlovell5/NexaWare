const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();

app.use(bodyParser.json());

app.post("/send-email", async (req, res) => {
  let { email, message } = req.body;

  let transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "contact@nexaware.co",
      pass: "NexaWare1!",
    },
    tls: {
      ciphers: "SSLv3",
    },
  });

  let mailOptions = {
    from: email,
    to: "contact@nexaware.co",
    subject: "New Contact Form Submission",
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true });
  } catch (error) {
    console.error("Error sending email: ", error);
    res.status(500).json({ success: false });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
