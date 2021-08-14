import mongoose from 'mongoose';

const notesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Note = mongoose.model('Note', notesSchema);

export default Note;