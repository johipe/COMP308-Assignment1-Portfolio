 /**File name:index.js
 * Author's name:Johanna Ponce
 * web site name: Portfolio
 * file description: main routes file
 */ 

var express = require('express');
var router = express.Router();
var nodemailer = require("nodemailer");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Johanna Ponce', msg:'Welcome to my Portfolio', img:'/images/butterfly2.jpg'});
});

/* GET about page. */
router.get('/about', function(req, res, next) {
     console.log("inside of about...");
  res.render('index', { title: 'About Me', msg:'Computer engineer with more than 4 years of experience guiding and supporting internal business units to maximize their use of the technology resources as a result of leading software projects through all the stages of the system development life cycle and business process analysis and improvement through automation when possible.', img:'/images/Johanna_photo.jpg' });

});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
    res.render('projects', { title: 'Projects' });
    
});

/* GET contact page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});


//smtp Transport varable
var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "portfolioponce@gmail.com",
        pass: "emerging"
    }
});

/* GET sned email. */
router.get('/send',function(req,res){
    var mailOptions={
        to : 'portfolioponce@gmail.com',
        subject : req.query.subject,
        text : req.query.text +" from email: "+ req.query.to,
    }
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response){
     if(error){
            console.log(error);
        res.end("error");
     }else{
            console.log("Message sent: " + response.message);
        res.end("sent");
         }
});
});

module.exports = router;
