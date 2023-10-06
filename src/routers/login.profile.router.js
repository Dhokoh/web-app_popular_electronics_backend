const {Router} =  require('express');
const { add_client_user } = require('../controllers/users.controller');
const login_profile_router = Router();

//localhost:3000/profile
login_profile_router.get('/', (req, res) => {
    res.send("Hello from client profile page");
})

//localhost:3000/
login_profile_router.post('/', add_client_user);

module.exports = login_profile_router;