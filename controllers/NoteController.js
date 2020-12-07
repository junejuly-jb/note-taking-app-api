const User = require('../model/User')


const createNote = (req, res) => { 

    const newNote = {
        title: req.body.title,
        content: req.body.content,
    }

    User.findOne({ _id: req.user._id })
        
        .then((record) => { 
            record.notes.push(newNote)
            const updatedUserNote = record.save()
            return res.status(200).json({message: 'Note added!'})
        })
    
    

}


module.exports = { createNote }