import express, { response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRouter from "./routes/bookRoutes.js";
import cors from "cors";

const app = express();
app.use(express.json());
// app.use(cors());
app.use(cors({
    origin: 'http://localhost:5000',
    methods: 'GET, POST, PUT, DELETE',
    allowedHeaders: 'Content-Type'
}));

app.get('/', (req, res) => {
    console.log(req);
    return res.status(234).send('Hello from server');
});

app.use('/books', booksRouter);

mongoose.connect(mongoDBURL).then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((err) => {
    console.log('Failed to connect to MongoDB', err);
});