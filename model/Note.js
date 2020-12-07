const mongoose = require('mongoose')

const noteSchema = mongoose.Schema({
    
    title: {
        type: String,
        required: true
    },

    content: {
        type: String,
        required: true
    },

    user_id: {
        type: mongoose.Schema.ObjectId,
    }

})

module.exports = mongoose.model('Note', noteSchema)