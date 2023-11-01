const {Router} = require('express');
const { add_client_user } = require('../controllers/users.controller');
const { get_all_clients } = require('../controllers/users.controller');

const login_router = Router();
const client = require('../models/models.users/clientSchema');
const admin = require('../models/models.users/adminSchema');

//Backend routing. 

//localhost:3000/login/
login_router.get('/', (req, res) => {
    res.send(get_all_clients())
});


login_router.post('/', (req, res) => {
    const {formID} = req.body;
    if (formID === "regform"){
        res.send("new user registered");
    }else{
        if (formID === "loginform"){
            res.send("user logged in")
        }
    }
})

module.exports = login_router;
