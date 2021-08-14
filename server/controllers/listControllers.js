import mongoose from 'mongoose';

import List from '../models/itemsModel.js';

export const getLists = async (req, res) => {
    try {
        const lists = await List.find();
        res.status(200).json(lists);
    } catch (error) {
        res.status(404).json({message: error.message})
    }

};

export const createList = async (req, res) => {
    
    const newList = new List({
        name: req.body.name
    })

    try {
        await newList.save();
        res.status(201).json(newList);
    } catch (error) {
        res.status(409).json({message: error.message})
    }

};

export const createListItem = async (req, res) => {
    try {
        await List.findById(req.params.id, (err, result) => {
            result.list.push({name: req.body.name});
            result.save();
            res.status(200).json(result);
        });
        
    } catch (error) {
        console.log(error.message)
    }

}

export const deleteList = async (req, res) => {
    const { id } = req.params;

    try {
        await List.findByIdAndRemove(id);
        res.json({message: "deleted successfully"});
    } catch (error) {
        res.json({message: error.message});
    }
}

export const deleteListItem = async (req, res) => {

    const { listId, id } = req.params;

    try {
        
        await List.findById(listId, (err, result) => {
            result.list.id(id).remove();
            result.save();
            res.send(result);
        });
        
    } catch (error) {
        res.json({message: error.message});
    }

}