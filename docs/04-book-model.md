# Book model

To create a new model, we need to create a new file in the `backend/models` directory. Let's create a new file called `bookModel.js` and add the following code:

```javascript
import mongoose from 'mongoose';

const bookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author : {
            type: String,
            required: true,
        },
        publishYear: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);
export const Book = mongoose.model('Book', bookSchema);
```

This code creates a new schema for the book model. The schema defines the structure of the document that will be stored in the database. The `title`, `author`, and `publishYear` fields are required and of type `String`, `String`, and `Number` respectively. The `timestamps` option creates two fields, `createdAt` and `updatedAt`, to store the creation and update times of the document. The `Book` model is created using the schema and exported.