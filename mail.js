const nodemailer = require('nodemailer');
require("dotenv").config();
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: process.env.API_KEY, // TODO: Replace with your mailgun API KEY
        domain: process.env.DOMAIN // TODO: Replace with your mailgun DOMAIN
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