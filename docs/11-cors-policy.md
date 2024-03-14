# CORS policy

## What is CORS?
CORS stands for Cross-Origin Resource Sharing. It is a security feature implemented in web browsers to prevent unauthorized access to resources on a different origin. An origin is defined as the combination of protocol, domain, and port. For example, the origin of `https://example.com:8080` is `https://example.com:8080`. It is a safety measure to prevent unauthorized access to resources on a different origin. However, there are times when you want to allow access to resources from a different origin. This is where CORS comes in.

## Including CORS in your Express app
To use CORS in your Express app, you need to install the `cors` package. You can do this by running the following command in your terminal:

```bash
npm i cors
```

After installing the `cors` package, you can include it in your Express app by adding the following line of code to your `index.js` file:

```javascript
import cors from "cors";
```

Then, you can use the `cors` middleware in your app by adding the following line of code to your `index.js` file. This can be done in 2 ways:
- Allow all origins
- Allow specific origins

```javascript
// Allow all origins
app.use(cors());
// Allow specific origins
app.use(cors({
    origin: 'http://localhost:5000',
    methods: 'GET, POST, PUT, DELETE',
    allowedHeaders: 'Content-Type'
}));
```

Note that only one of the above lines should be used in your `index.js` file. The first line allows all origins, while the second line allows only the specified origin. You can also specify the methods and headers that are allowed.