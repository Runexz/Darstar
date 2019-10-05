const nodemailer = require('nodemailer');
require("dotenv").config();
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: "d1b90b577df6ea63fb074c511d5ed164-af6c0cec-c745a6e9", // TODO: Replace with your mailgun API KEY
        domain: "sandboxe6d94f87cefd4a62bcaa1da8c695c514.mailgun.org" // TODO: Replace with your mailgun DOMAIN
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));


const sendMail = (email, subject, text, cb) => {
    const mailOptions = {
        from: email,
        to: 'darstarinc@gmail.com ',
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