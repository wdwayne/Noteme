import { Router } from "express";

import { getNotes, addNote, editNote, deleteNote } from '../controllers/noteController.js'

const noteRoutes = Router();

noteRoutes.get('/', getNotes);

noteRoutes.post('/', addNote);

noteRoutes.patch('/:id', editNote)

noteRoutes.delete('/:id', deleteNote)



export default noteRoutes;