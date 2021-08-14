import mongoose from 'mongoose';

import Note from '../models/notesModel.js'

export const getNotes = async (req, res) => {

    try {
        await Note.find((err, result) => {
            res.send(result);
        });
    } catch (error) {
        console.log({ message: error.message });
    }

}

export const addNote = async (req, res) => {

    const { title, body } = req.body;

    try {
        const newNote = new Note({
            title: title,
            body: body
        })
    
        await newNote.save((err, note) => {
            res.send(note)
        })
    } catch (err) {
        console.log(err)
    }

}

export const editNote = async (req, res) => {

    const { id } = req.params;
    const { note } = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('Item not found in database');

    try {
        const updatedNote = await Note.findOneAndUpdate(id,note, {new: true});
        res.send(updatedNote);
    } catch (error) {
        console.log({message: error.message})
    }

}

export const deleteNote = async (req, res) => {

    try {
        
        await Note.findByIdAndDelete(req.params.id)
        res.json({message: "deleted successfully"})
    } catch (err) {
        console.log(err)
    }

}