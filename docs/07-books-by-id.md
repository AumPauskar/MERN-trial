# Getting books by id

What if we want to retrieve a specific book from the database? We can do this by creating a new `get` route for the `/books/:id` endpoint. 

```javascript
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
```
Here the `:id` is a route parameter which is used to retrieve the book with the given id, this id is then used to query the database and retrieve the book.

In my case the id was `65ef564e810c88d123eea864`. So the argument in postman must be using the **get** method and the url must be `http://localhost:3000/books/65ef564e810c88d123eea864`. The final output (from postman) should look like this:

```json
{
    "_id": "65ef564e810c88d123eea864",
    "title": "name",
    "author": "authname",
    "publishYear": 2077,
    "createdAt": "2024-03-11T19:06:55.000Z",
    "updatedAt": "2024-03-11T19:06:55.000Z",
    "__v": 0
}
```