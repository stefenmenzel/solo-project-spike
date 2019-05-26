const express = require('express');
require('dotenv').config();
const nodemailer = require('nodemailer');

const app = express();
const bodyParser = require('body-parser');
const client = require('twilio')(process.env.TWILLIOSID, process.env.TWILLIOAUTH);

const transport = {
    host: 'smtp.gmail.com',
    auth:{
        user: process.env.EMAIL,
        pass: process.env.PASS
    }
};
const transporter = nodemailer.createTransport(transport);



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('build'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);    
});

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log('Server is ready to take messages');
    }
});

app.post('/api/sendMail', (req, res) => {        
    let email = req.body.emailAddress;
    console.log('email address to send to:', email);
    let message = req.body.message;
    let content = `email: ${email} \n message: ${message}`;

    let mail = {
        from: 'Chickey-Checker-5000',
        to: email,
        subject: `GOOD NEWS!`,
        text: message
    }

    transporter.sendMail(mail, (err, data) => {
        if(err){
            console.log('error in send:', err);
            res.json({
                msg: 'fail'
            })
        }
        else{
            res.json({
                msg:'success'
            })
        }
    })
})

app.post('/api/sendText', (req,res) => {
    console.log('twillio number:', process.env.TWILLIONUMBER);
    client.messages
    .create({
        body: req.body.textMessage,
        from: process.env.TWILLIONUMBER,
        to: `+1${req.body.number}`
    })
    .then(message => 
    {
        console.log(message.sid);
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log('error in sendText:', error);
        res.sendStatus(500);
    })
})