const {Router} = require('express');
const login_router = Router();
const { add_client_user } = require('../controllers/users.controller');
const { get_all_clients } = require('../controllers/users.controller')

login_router.get('/', (req, res) => {
    res.send('Hello this is login page backend on GET request')
})

module.exports = login_router;
