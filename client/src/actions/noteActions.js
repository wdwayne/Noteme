import axios from 'axios';

import { GET, CREATE, EDIT, DELETE } from './types';

export const getNotes = () => async dispatch => {
    try {
        const { data } = await axios.get('/noteapi')
        dispatch({type: GET, payload: data})
        
    } catch (error) {
        console.log({ message: error.message })
    }
}

export const createNote = (note) => async dispatch => {
    
    try {
        
        const { data } = await axios.post('/noteapi', note);
        dispatch({type: CREATE, payload: data});

    } catch (error) {
        console.log({message: error.message})
    }

}

export const editNote = ( note, id ) => async dispatch => {
    
    try {
        
        const { data } = await axios.patch(`/noteapi/${id}`, note);
        dispatch({type: EDIT, payload: data});

    } catch (error) {
        console.log({message: error.message});
    }

}

export const deleteNote = (id) => async dispatch => {
    try {
        
        await axios.delete(`/noteapi/${id}`);

        dispatch({type: DELETE, payload: id})

    } catch (error) {
        
    }
}


