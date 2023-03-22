"use strict";
const rolesSeed = require('../seed');
const mongoose = require('mongoose');

const rolesSchema = new mongoose.Schema({
    name: {
        type: String
    },
})
const Roles = mongoose.model('Roles', rolesSchema);

const seedRoles = ()=>{
    Roles.deleteMany();
    Roles.insertMany(rolesSeed)
};

module.exports = {
    Roles,
    seedRoles
}