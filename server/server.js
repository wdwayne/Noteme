import dotenv from 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';


const app = express();


app.use(express.json({extended: true}));
app.use(express.urlencoded({extended: true}));

const PORT = process.env.PORT || 5000;
const URL =  process.env.CONNECTION_URL;



mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`)))
    .catch((err) => console.log(err))

app.get('/', (req, res) => {
    res.send('<h1>Hello welcome to the game.</h1>')
})