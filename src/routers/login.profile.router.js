const {Router} =  require('express');
const login_profile_router = Router();

//Profile routing
login_profile_router.get('/profile', (req, res) => {
    res.send("Hello from profile page");
})