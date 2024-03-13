# Getting books from the database 

In the previous module we have used the **post** method to add books to the database. In this module we will use the **get** method to retrieve books from the database. In order to d othis we can create a new `get` route for the `/books` endpoint. 

```javascript
app.get('/books', async (req, res) => {
    try {
        const books = await Book.find({});
        return res.status(200).send(books);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message});
    }
});
```

This method can further be modified for a more detailed search by modifying the json output. 

```javascript
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
```

Similarly to the previous module the endpoints are to be tested using Postman. But instead of using the **post** method, we will use the **get** method.

The final output (from postman) should look like this:

```json
{
    "count": 1,
    "data": [
        {
            "_id": "65ef564e810c88d123eea864",
            "title": "name",
            "author": "authname",
            "publishYear": 2077,
            "createdAt": "2024-03-11T19:06:55.000Z",
            "updatedAt": "2024-03-11T19:06:55.000Z",
            "__v": 0
        }
    ]
}
```