const nodemailer = require('nodemailer');

const html_email = `
    <h1> hello world </h1>
    <p> this is an email sent with nodemailer </p>
`;

//to be deleted
const getContactTest = async (req, res) => {
    res.send('hello from contacto backend')
}

const send_email = async (req, res) => {
    try{
        const email_transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465, 
            secure: true,
            auth: {
                user: 'webappemailtester@gmail.com',
                pass: 'GoGeta2!'
            }
        });

        const req_info = await email_transporter.sendMail({
            from: 'Popular Electronics <webappemailtester@gmail.com',
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