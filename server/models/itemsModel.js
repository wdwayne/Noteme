import mongoose from 'mongoose';

const listSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    list: [{name: String}],
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const List = mongoose.model('List', listSchema);

export default List;