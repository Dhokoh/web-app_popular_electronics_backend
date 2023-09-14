const nodemailer = require('nodemailer');

const html_email = `
    <h1> hello world </h1>
    <p> this is an email sent with nodemailer </p>
`;

// //to be deleted
// const getContactTest = async (req, res) => {
//     res.send('hello from contacto backend')
// }

const send_email = async (req, res) => {
    try{
        const email_transporter = nodemailer.createTransport({
            host: process.env.ELASTIC_SMTP_SERVER,
            port: process.env.ELASTIC_SMTP_PORT, 
            secure: true,
            auth: {
                user: process.env.ELASTIC_SMTP_USER,
                pass: process.env.ELASTIC_SMTP_PW
            }
        });

        const req_info = await email_transporter.sendMail({
            from: 'webapptester123@outlook.com',
            to: 'davidhogarcia@gmail.com',
            subject: 'test email using nodemailer',
            html: html_email
        });
        
        (`Mensaje enviado: ${req_info.messageId}, nos estaremos comunicando con usted en las proximas 24 horas.`);
    }
        
    catch(e){
        res.send(`Se ha presentado un fallo: ${e}`);
    }
};

module.exports = {send_email};