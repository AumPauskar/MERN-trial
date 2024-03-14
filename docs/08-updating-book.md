# Updating books

## Use of the `put` method
The `put` method is used to update a book in the database. In order to do this we can create a new `put` route for the `/books/:id` endpoint. 

```javascript
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
```

This is a route handler for a PUT request in an Express.js application. It's designed to update a book record in a database. Here's a step-by-step explanation:

1. `app.put('/books/:id', async (req, res) => {...}`: This line sets up a route for PUT requests to '/books/:id'. The ':id' is a route parameter that will be replaced with the ID of the book to update.

2. Inside the route handler, it first checks if the required fields (`title`, `author`, `publishYear`) are provided in the request body. If not, it sends a 400 status code (Bad Request) with a message.

3. `const { id } = req.params;`: This line extracts the 'id' from the request parameters.

4. `const result = await Book.findByIdAndUpdate(id, req.body);`: This line uses the `findByIdAndUpdate` method of the `Book` model to update the book with the given ID. It uses the data from the request body to update the book.

5. If the `findByIdAndUpdate` method does not find a book with the given ID, it returns `null`. The code checks for this and, if the book is not found, sends a 404 status code (Not Found) with a message.

6. If the book is found and updated, it sends a 200 status code (OK) with a success message.

7. If any error occurs during this process, it's caught in the `catch` block, logged to the console, and a 500 status code (Internal Server Error) is sent with the error message.

Similar to the previous modules, the endpoints are to be tested using Postman. But instead of using the `post` method, we will use the `put` method.

Use the following postman settings
- Method: `put`
- URL: `http://localhost:3000/books/<bookid>`
- Body: 
    ```json
    {
        "title": "new title",
        "author": "new author",
        "publishYear": 2023
    }
    ```
The final output (from postman) should look like this:

```json
{
    "message": "Book updated successfully"
}
```

This can be verified by using the `get` method and the url must be `http://localhost:5000/books/<bookid>`. The final output (from postman) should look like this:

```json
{
    "_id": "65ef564e810c88d123eea864",
    "title": "newname",
    "author": "newauthname",
    "publishYear": 2023,
    "createdAt": "2024-03-11T19:06:55.000Z",
    "updatedAt": "2024-03-14T06:46:16.522Z",
    "__v": 0
}
```