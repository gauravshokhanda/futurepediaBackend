"use strict";

const mongoose = require('mongoose');

const projectsSchema = new mongoose.Schema({
    name:{
        type:String
    },
    user:{
        type:String
    },
    created_at:{
        type:Date
    }
})
const Projects = mongoose.model('Projects',projectsSchema );
module.exports ={
    Projects
}