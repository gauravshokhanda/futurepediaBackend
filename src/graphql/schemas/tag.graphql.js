const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
    name: {
        type: String
    },
    projectId:{
        type:String
    }
})

const Tags = mongoose.model('Tags', tagSchema);


module.exports = {
    Tags
} 