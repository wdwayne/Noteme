import { LIST_GET, CREATE_LIST, DELETE_LIST, CREATE_ITEM, DELETE_ITEM } from '../actions/types';

export default (lists = [], action) => {

    switch (action.type) {
        case LIST_GET:
            return action.payload;

            break;
        case CREATE_LIST:
            return [...lists, action.payload]
            break;

        case CREATE_ITEM:
            return lists.list.push({name: action.payload});
           break; 

        case DELETE_LIST:
            return lists.filter(list => list._id !== action.payload);
            break;

        case DELETE_ITEM:
            return lists.list.filter(item => item.id !== action.payload);
           break;
        default:
            return lists
    }
     
}