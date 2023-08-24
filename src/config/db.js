//Dependencies import
//None

//Other imports

//Database config
require('dotenv').config();
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const database_connection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("database connected");
    }catch (e) {
        console.log("Connection failure");
        console.log(e)
    }
}

module.exports = { database_connection };