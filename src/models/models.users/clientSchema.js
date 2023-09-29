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
    }
);

const Admin = mongoose.model('admin', adminSchema);
module.exports = Admin;