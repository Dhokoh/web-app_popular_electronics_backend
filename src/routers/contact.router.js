const { Router } = require('express');
const contact_router = Router();
const { send_email } = require ('../controllers/contact.controller');


//localhost:$PORT/contacto
contact_router.get('/', res.send("Hello from contact backend"));

//localhost:$PORT/contacto
contact_router.post('/', send_email);


