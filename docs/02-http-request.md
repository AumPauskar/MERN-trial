# HTTP request

## HTTP request methods
- GET: Retrieve data from the server
- POST: Send data to the server
- PUT: Update data on the server
- DELETE: Remove data from the server
- PATCH: Update data partially on the server
- HEAD: Retrieve headers from the server
- OPTIONS: Retrieve supported methods from the server

## HTTP response code
- 200: OK
- 201: Created
- 204: No Content
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 405: Method Not Allowed
- 500: Internal Server Error
- 503: Service Unavailable

## Sending an HTTP request using express
Open the previously created `index.js` file and add the following code:

```javascript
app.get('/', (req, res) => {
    console.log(req);
    return res.status(234).send('Hello from server');
});
```

The total code will be as follows:

```javascript
import express from "express";
import { PORT } from "./config.js";

const app = express();

app.get('/', (req, res) => {
    console.log(req);
    return res.status(234).send('Hello from server');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
```

In the above code, we have created a simple server that listens on port 3000 and sends a response with status code 234 and a message "Hello from server" when a request is made to the root URL.

Now to verify this you can run `npm run dev` and open the link given in the terminal. You will see the message "Hello from server" on the browser. To verify the status code, you can open the developer tools and check the network tab.

Another method to verify the status code is to use postman. You can install postman from [here](https://www.postman.com/downloads/). Postman is a tool that allows you to send HTTP requests and view the response. You can use postman to send a GET request to the server and check the status code and response. 