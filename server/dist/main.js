import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import TodoRouter from './routes/TodoRoutes.js';
dotenv.config();
const app = express();
mongoose.connect(process.env.DB)
    .then(() => {
    console.log('data connection established');
})
    .catch(err => console.log(err.message));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/todo', TodoRouter);
app.get('/', (req, res) => {
    console.log('hey, jake');
    res.status(200).send('hey, jake, but on the screen');
});
app.listen(process.env.PORT || 4200, () => {
    console.log('server is live');
});
