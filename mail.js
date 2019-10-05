const nodemailer = require('nodemailer');
require("dotenv").config();
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: process.env.API_KEY || "93dacb503f2ddbeed1b08e26374b14d8-af6c0cec-e5e4bd80", // TODO: Replace with your mailgun API KEY
        domain: process.env.DOMAIN || "sandbox54b1872dba614f06bd96e9a282691bbf.mailgun.org" // TODO: Replace with your mailgun DOMAIN
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));


const sendMail = (email, subject, text, cb) => {
    const mailOptions = {
        from: email,
        to: 'groupsmubootcamp@gmail.com',
        subject,
        text
    };

    transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
            return cb(err, null);
        }
        return cb(null, data);
    });
}

module.exports = sendMail;