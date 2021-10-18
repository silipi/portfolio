import nodemailer from 'nodemailer';
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

module.exports = (req, res) => {
  const { name, email, message } = req.body;

  transporter.sendMail(
    {
      from: process.env.EMAIL_USER,
      to: 'gabriel.silipi@gmail.com',
      subject: 'Message from Contact Form - silipi',
      html: `<h2>Mail from your contact form at Silipi</h2>
      <p>From: <b>${name}</b> - at <b>${email}</b></p>
      <h3>Here's the message:</h3>
      <p>${message}</p>`,
    },
    (err, info) => {
      if (err) {
        console.log(err);
        res.status(500).json({
          message: "message not send: an error occured; check the server's log.",
        });
      } else {
        res.json({ message: `message sent: ${info.messageId}` });
      }
    },
  );
};
