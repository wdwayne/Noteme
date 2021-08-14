import { Router } from 'express';

import { getLists, createList, createListItem, deleteList, deleteListItem } from '../controllers/listControllers.js'


const listRoutes = Router();

listRoutes.get('/', getLists);

listRoutes.post('/', createList);

listRoutes.patch('/:id', createListItem);

listRoutes.delete('/:id', deleteList);

listRoutes.patch('/:listId/:id', deleteListItem);


export default listRoutes;