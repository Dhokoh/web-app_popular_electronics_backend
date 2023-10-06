const mongoose = require('mongoose');

const clientSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        ph_number: {
            type: String,
            require: true
        },
        password: {
            type: String, 
            require: true
        }
    }
);

const Client = mongoose.model('client', clientSchema);
module.exports = Client;