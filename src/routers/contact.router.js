const { Router } = require('express');
const contact_router = Router();
const { send_email } = require ('../controllers/contact.controller');


//localhost:$PORT/contacto
contact_router.get('/', (req, res) => {
    res.send('hello from /contacto backend')
});

//localhost:$PORT/contacto
contact_router.post('/', send_email);

module.exports = contact_router;


