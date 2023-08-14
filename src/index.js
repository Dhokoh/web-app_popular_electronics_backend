//Dependencies import

//Other imports

//Backend index structure

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())

const {db_connection} = require('./config/db')
db_connection();

const port = 4000;
app.listen(port, ()=>{
    console.log(`DB connected on port: ${port}`)
})

app.use(cors());

/*Routes*/

//localhost:4000/
app.get('/', (req, res) => {
    res.send("Hello from backend")
})
