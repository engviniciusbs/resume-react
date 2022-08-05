const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

require("dotenv").config();
console.log(process.env);

const user = process.env.MAIL_USER;
const pass = process.env.MAIL_PASS;
const port = process.env.MAIL_PORT;
const host = process.env.MAIL_HOST;

const bodyParser = require("body-parser")
const cors = require("cors")
const nodemailer = require("nodemailer")

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(cors())

app.post("/send_mail", cors(), async (req, res) => {
    let name = req.body.name
    let email = req.body.email
    let message = req.body.message
    const transport = nodemailer.createTransport({
        host: host,
        port: port,
        auth: {
            user: user,
            pass: pass
        }
    })

    await transport.sendMail({
        from: user,
        to: "contato@viniciusbsarmento.com",
        subject: `Contact form - Resume Vinícius - Message from ${name}`,
        html: `Name: ${name} <br />
               Email: ${email} <br />
               Message: ${message}`
    })

    // transport.sendMail(mailOptions, (error, info)=>{
    //     if (error){
    //         console.log(error);
    //         res.send('error');
    //     } else {
    //         console.log('Email sent: ' + info.response);
    //         res.send('sucess');
    //     }
    // })

})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});