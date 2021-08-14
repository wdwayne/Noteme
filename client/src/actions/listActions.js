import axios from 'axios';

import { LIST_GET, CREATE_LIST, CREATE_ITEM, DELETE_ITEM, DELETE_LIST } from './types';

export const getLists = () => async dispatch =>  {

    try {
        const { data } = await axios.get('/listapi');
        dispatch({type: LIST_GET, payload: data});
    } catch (error) {
        console.log(error.message)
    }

}

export const createList = (list) => async dispatch => {

    try {
        const { data } = await axios.post('/listapi', list);
        dispatch({type: CREATE_LIST, payload: data});
    } catch (error) {
        console.log(error.message);
    }

}

export const deleteList = (id) => async dispatch => {

    try {
        await axios.delete(`/listapi/${id}`)
        dispatch({type: DELETE_LIST, payload: id})
    } catch (error) {
        console.log(error.message)
    }

}

export const createItem = (id, item) => async dispatch => {

    try {
        const { data } = await axios.patch(`/listapi/${id}`, item);
        dispatch({type: CREATE_ITEM, payload: data});
    } catch (error) {
        console.log(error);
    }

}

export const deleteItem = (listId, id) => async dispatch => {
    try {
        await axios.patch(`listapi/${listId}/${id}`);
        dispatch({type: DELETE_ITEM, payload: id});
    } catch (error) {
        console.log(error)
    }
}