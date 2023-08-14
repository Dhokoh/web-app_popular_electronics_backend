//Dependencies import

//Other imports

//Database config
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const database_connection = async () => {
    try {
        await mongoose.connect();
        console.log("database connected");
    }catch (e) {
        console.log("Connection failure");
        console.log(e)
    }
}

module.exports = { database_connection };