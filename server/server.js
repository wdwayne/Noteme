import dotenv from 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import noteRoutes from './routes/noteRoutes.js';
import listRoutes from './routes/listRoutes.js';

const app = express();

app.use(cors());
app.use(express.json({extended: true}));
app.use(express.urlencoded({extended: true}));

const PORT = process.env.PORT || 5000;
const URL =  process.env.CONNECTION_URL;



mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false})
    .then(() => console.log('Database connection established'))
    .catch((err) => console.log(err))

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))

app.use('/noteapi', noteRoutes);
app.use('/listapi', listRoutes);

app.get('/', (req, res) => {
    res.send('<h1>Hello welcome to the game.</h1>')
})