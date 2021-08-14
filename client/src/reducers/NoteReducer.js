import { GET, CREATE, EDIT, DELETE } from '../actions/types';

export default (notes = [], action) => {

    switch (action.type) {

        case  GET:
            return action.payload;
            break;

        case  CREATE:
            return [ ...notes, action.payload ]
            break;

        case  EDIT:
            return notes.map( note => note._id === action.payload._id ? action.payload : note )
            break;

       case  DELETE:
        return notes.filter(note => note._id !== action.payload);
        break;

        default:
            return notes
    }

}