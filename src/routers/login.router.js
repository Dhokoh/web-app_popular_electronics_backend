const {Router} = require('express');
const { add_client_user } = require('../controllers/users.controller');
const { get_all_clients } = require('../controllers/users.controller');

const login_router = Router();
const client = require('../models/models.users/clientSchema');
const admin = require('../models/models.users/adminSchema');

//Backend routing. 

//localhost:3000/login/
login_router.get('/', (req, res) => {
    res.send('Hello this is login page backend on GET request')
});


login_router.post('/', (req, res) => {
    res.send("This is backend on POST request");
    const {name, ph_number, email, password} = req.body;
    
})

module.exports = login_router;
