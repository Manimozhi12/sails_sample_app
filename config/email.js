var nodemailer = require('nodemailer');

module.exports.email = {
  service: "Mailgun",
  auth: {
    user: "postmaster@sandboxf421e01c800849eca3834fba09885b99.mailgun.org", 
    pass: "0e1d46694ed03c76ad6c7a93d2d0f484"
  },
  templateDir: "views/emailTemplates",
  from: "manimozhi.b@optisolbusiness.com",
  testMode: false,
  ssl: true
}



