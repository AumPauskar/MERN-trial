# Deleting books from the database

In the previous modules, we have used the `post` method to add books to the database, the `get` method to retrieve books from the database, and the `put` method to update books in the database. In this module, we will use the `delete` method to remove books from the database.

This is the following route to handle the `delete` method:

```javascript
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
```

The code is self-explanatory. It first checks if the book with the given ID exists in the database. If it does, it deletes the book and sends a 200 status code (OK) with a success message. If the book is not found, it sends a 404 status code (Not Found) with a message. If any error occurs during this process, it's caught in the `catch` block, logged to the console, and a 500 status code (Internal Server Error) is sent with the error message.

Similar to the previous modules, the endpoints are to be tested using Postman. But instead of using the `post` method, we will use the `delete` method.

First we shall add a new book to the database using the `post` method. Then we will use the `get` method to retrieve the book's id. Finally, we will use the `delete` method to remove the book from the database.

**Adding a new book**
- Method: `post`
- URL: `http://localhost:5000/books`
- Body: 
    ```json
    {
        "title": "deletethisbook",
        "author": "deletethisauthor",
        "publishYear": 2008
    }
    ```

**Retrieving the book's id**
- Method: `get`
- URL: `http://localhost:5000/books`
- The final output (from postman) should look like this:
    ```json
    {
        "count": 2,
        "data": [
            {
                "_id": "65ef564e810c88d123eea864",
                "title": "newname",
                "author": "newauthname",
                "publishYear": 2023,
                "createdAt": "2024-03-11T19:06:55.000Z",
                "updatedAt": "2024-03-14T06:46:16.522Z",
                "__v": 0
            },
            {
                "_id": "65f2a166b3f07128b54a362f",
                "title": "deletethisbook",
                "author": "deletethisauthor",
                "publishYear": 2008,
                "createdAt": "2024-03-14T07:04:06.831Z",
                "updatedAt": "2024-03-14T07:04:06.831Z",
                "__v": 0
            }
        ]
    }
    ```
    Here the second book has the id `65f2a166b3f07128b54a362f` and this is the id we will use to delete the book.

**Deleting the book**
- Method: `delete`
- URL: `http://localhost:5000/books/65f2a166b3f07128b54a362f`
- The final output (from postman) should look like this:
    ```json
    {
        "message": "Book deleted successfully"
    }
    ```

This can be verified by using the `get` method and the url must be `http://localhost:5000/books`. The final output (from postman) should look like this:
```json
{
    "count": 1,
    "data": [
        {
            "_id": "65ef564e810c88d123eea864",
            "title": "newname",
            "author": "newauthname",
            "publishYear": 2023,
            "createdAt": "2024-03-11T19:06:55.000Z",
            "updatedAt": "2024-03-14T06:46:16.522Z",
            "__v": 0
        }
    ]
}
```