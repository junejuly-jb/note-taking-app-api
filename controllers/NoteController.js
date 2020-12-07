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


const myNotes = (req, res) => { 

    User.findOne({ _id: req.user })
        
    .then(response => { 

        return res.status(200).json(response.notes)

    })

    .catch(err => {

        return res.status(400).send(res)

    })

}

const noteDetails = async (req, res) => { 

    // return res.status(200).json(req.params.id)
    const result = await User.findOne({ "_id": req.user }, { notes: {$elemMatch: {_id: req.params.id}} })
    return res.status(200).send(result.notes)

}

const deleteNote = async (req, res) =>
    {
        await User.update({ _id: req.user }, { $pull: { "notes": { _id: req.params.id } } }, {multi: true})
            .then(() => { return res.status(200).send('Success') })
            .catch(err => { return res.status(500).send('error deleting note') })
    }

module.exports = { createNote, myNotes, noteDetails, deleteNote}