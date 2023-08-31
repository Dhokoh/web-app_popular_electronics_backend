//Dependencies imports

//Other dependencies

const nodemon = require('nodemon');
const admin_user = require('../models/models.users/adminSchema');
const client_user = require('../models/models.users/clientSchema');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const restart = require('nodemon');

const get_all_admin_users = async (req, res) => {
    const all_admin_users = await admin_user.find({});
    res.json(all_admin_users);
};

const get_all_client_users = async (req, res) => {
    const all_client_users = await client_user.find({});
    res.json(all_client_users)
};

const add_admin_user = async (req, res) => {
    try{
        const {name, email, password} = req.body;
        const salt = await bcryptjs.genSalt(10);
        const hashed_pword = await bcryptjs.hash(password, salt);
    
        const new_admin_user = admin_user.create({
            name: name, 
            email: email,
            password: hashed_pword,
    }); 

    res.json(new_admin_user);

    }catch{
        res.json({
            msg: 'No fue posible crear su cuenta admin, por favor contacte con el administrador del sistema.'
        });
    }
};

const add_client_user = async (req, res) => {
    try{
        const {name, email, ph_number, vip_client} = req.body;
        const salt = await bcryptjs.genSalt(10);
        const hashed_pword = await bcryptjs.hash(password, salt);

        const new_client_user = client_user.create({
            name: name,
            email: email, 
            ph_number: ph_number,
            vip_client: false,
        });

        res.json(new_client_user);
    }catch{
        res.json({
            msg: 'No fue posible crear su cuenta, por favor intente mas tarde'
        });
    }
}
module.exports = {get_all_admin_users, get_all_client_users, add_admin_user, add_client_user};

