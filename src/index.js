//Dependencies import

//Other imports

//Backend index structure

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json())
app.use(cors());

const {database_connection} = require('./config/db')
database_connection();

app.listen(process.env.PORT, ()=>{
    console.log(`DB connected on port: ${process.env.PORT}`)
})

/*Routes*/

//localhost:$PORT/
app.get('/', (req, res) => {
    res.send("Hello from backend")
})
