//Dependencies imports

//Other dependencies

const admin_user = require('../models/models.users/adminSchema');
const client_user = require('../models/models.users/clientSchema');

const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken')

const get_all_admin_users = async (req, res) => {
    const all_admin_users = await admin_user.find({});
    res.json(all_admin_users);
};

const get_all_client_users = async (req, res) => {
    const all_client_users = await client_user.find({});
};



