const {Router} =  require('express');
const profile_router = Router();

//localhost:3000/profile
profile_router.get('/', (req, res) => {
    res.send('Hello, this is profile pages backend on GET request')
})

//localhost:3000/
profile_router.post('/', (req, res) => {
    res.send("Hello this is profile page backend on POST request")
});

module.exports = profile_router;