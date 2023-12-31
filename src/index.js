//Dependencies import

//Other imports

//Backend index structure

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());
app.use(cors());

const {database_connection} = require('./config/db')
database_connection();

app.listen(process.env.PORT, ()=>{
    console.log(`API: On. Connected on port: ${process.env.PORT}`)
});

/*Routes*/

//https://web-app-popular-electronics-backend.onrender.com/
app.get('/', (req, res) => {
    res.send("Hello from backend");
});

/*Collections*/

//https://web-app-popular-electronics-backend.onrender.com/productos
app.use('/productos', require('../src/routers/products.router'));
app.use('/contacto', require('../src/routers/contact.router'));
app.use('/profile', require('../src/routers/profile.router'));
app.use('/login', require('../src/routers/login.router'));
