# Express router

Having all the routes in the same file can be a bit messy, it makes the code readability harder and debugging a bit more difficult. To solve this problem, Express provides a way to separate the routes into different files using the `express.Router` class.

In order to do this we can create a new file called `/routes/bookRoutes.js` and move the routes from `app.js` to this new file.

```javascript
import express from 'express';
import { Book } from '../models/bookModel.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        if (
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ) {
            return res.status(400).send({
                message: 'Please fill all required fields'
            });
        }
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
        };
        const book = await Book.create(newBook);
        // Send a response back to the client
        return res.status(201).send(book);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message});
    }
});

router.get('/', async (req, res) => {
    try {
        const books = await Book.find({});
        return res.status(200).json({ 
            count: books.length,
            data: books
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message});
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);
        return res.status(200).json(book);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message});
    }
});

router.put('/:id', async (req, res) => {
    try {
        if (
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ) {
            
            return res.status(400).send({
                message: "Please fill all required fields",    
            });
        }
        const { id } = req.params;
        const result = await Book.findByIdAndUpdate(id, req.body);

        if (!result) {
            return res.status(404).send({ message: "Book not found" });
        }

        return res.status(200).send({ message: "Book updated successfully" });
    } catch (error) {
            console.log(error.message);
            res.status(500).send({ message: error.message});
        }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Book.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).send({ message: "Book not found" });
        }
        return res.status(200).send({ message: "Book deleted successfully" });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message});
    }
});

export default router;
```

**For reference** the structure of the `index.js` file should look like this **BEFORE** the refactoring:

```javascript
import express, { response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    console.log(req);
    return res.status(234).send('Hello from server');
});

app.post('/books', async (req, res) => {
    try {
        if (
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ) {
            return res.status(400).send({
                message: 'Please fill all required fields'
            });
        }
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
        };
        const book = await Book.create(newBook);
        // Send a response back to the client
        return res.status(201).send(book);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message});
    }
});

app.get('/books', async (req, res) => {
    try {
        const books = await Book.find({});
        return res.status(200).json({ 
            count: books.length,
            data: books
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message});
    }
});

app.get('/books/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);
        return res.status(200).json(book);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message});
    }
});

app.put('/books/:id', async (req, res) => {
    try {
        if (
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ) {
            
            return res.status(400).send({
                message: "Please fill all required fields",    
            });
        }
        const { id } = req.params;
        const result = await Book.findByIdAndUpdate(id, req.body);

        if (!result) {
            return res.status(404).send({ message: "Book not found" });
        }

        return res.status(200).send({ message: "Book updated successfully" });
    } catch (error) {
            console.log(error.message);
            res.status(500).send({ message: error.message});
        }
});

app.delete('/books/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Book.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).send({ message: "Book not found" });
        }
        return res.status(200).send({ message: "Book deleted successfully" });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message});
    }
});

mongoose.connect(mongoDBURL).then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((err) => {
    console.log('Failed to connect to MongoDB', err);
});
```

And here is the code after refactoring:

```javascript
import express, { response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRouter from "./routes/bookRoutes.js";

const app = express();
app.use(express.json());

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
```

Note the changes we have done to the `index.js` file: \
We have removed all the `/books` routes from the `index.js` file and replaced them with `app.use('/books', booksRouter);`. This line tells Express to use the `booksRouter` for all the routes that start with `/books`.

And the `bookRoutes.js` file is a new file that we have created to hold all the `/books` routes. We have moved all the `/books` routes from the `index.js` file to this new file. We have renamed the `app` object to `router` and we have exported it at the end of the file and refactored the routes to start with `/` instead of `/books`. This is because we have included this line `app.use('/books', booksRouter);` in the `index.js` file, so all the routes in the `bookRoutes.js` file will be prefixed with `/books`.