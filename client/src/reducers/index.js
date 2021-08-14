import { combineReducers } from "redux";

import notes from './NoteReducer';
import lists from './listReducer';

export default combineReducers({ notes, lists });