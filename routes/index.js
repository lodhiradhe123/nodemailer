var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/nodemailer', function(req, res, next) {


// Create a transporter object using SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service provider
    auth: {
        user: 'radheshyamlodhi48@gmail.com', // Your email address
        pass: 'ubgr biga fiiq pnrf' // Your email password or application-specific password
    }
});

// Setup email data
let mailOptions = {
    from: 'radheshyamlodhi48@gmail.com', // Sender address
    to: req.body.email, // List of recipients
    subject: 'reset password', // Subject line
    // text: 'Hello world?', // Plain text body
    html: `<img src="">` // HTML body
};

// Send mail with defined transport object
transporter.sendMail(mailOptions, (error) => {
    if (error) {
        return console.log(error);
    }
    res.send("check yuor email")
});

  
});
module.exports = router;
