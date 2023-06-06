const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS
    }
  });


var mailOptionsSample = {
    from: process.env.EMAIL,
    to: 'mnessim@wcpss.net',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };

export default function Handler(req, res) {
    if (req.method !== "POST") {
        res.send({message: "only post requests allowed"})
    } 
    const {first_name, last_name, email, instrument} = req.body;
    const mailOptions = {
        from: email,
        to: process.env.EMAIL,
        subject: instrument,
        text: `${first_name} ${last_name} would like to take ${instrument} lessons. Contact them at ${email}`
    }
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error)
        } else {
            console.log('Email sent: ' + info.response)
        }
    });
    console.log(req.body)
    res.send(req.body)
    /*
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    res.send("Did it work?")*/
}