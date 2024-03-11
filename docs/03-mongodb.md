# MongoDB

## Introduction
MongoDB is a NoSQL database that stores data in JSON-like documents. It is a popular choice for many modern web applications because it can handle large amounts of data and is scalable. There are two ways to access MongoDB. One way is to install the MongoDB server on your computer and use the command line interface to interact with it. The other way is to use a cloud-based service like MongoDB Atlas. Here we will focus on using MongoDB Atlas.

## Prerequisites
Before you start, you will need to have a MongoDB Atlas account. You can sign up for free at [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas). Create a new account and proceed. Be sure to select the free tier option when creating your cluster if yo are planning to use it as a hobby project and don't wish to pay for the services.

## Setting up MongoDB Atlas
Create a strong password and store it in a safe place. You will need it to connect to your database and authenticate with **username** and **password**. Name the db cluster and click **finish**. This will take a couple of minutes to set up. Once it's done, click on the **connect** button. Click on **drivers** and select the latest version of **Node.js**. Copy the connection string and store it in `backend/config.js` file. **Note that we will store the password in this file itself so be sure to remove this file from the git repository and add it to the `.gitignore` file.**

## Connecting to MongoDB Atlas
Copy the connection string from the MongoDB Atlas dashboard and paste it in the `backend/config.js` file. Replace the password with the password you used to create the cluster. The connection string should look something like this:
```javascript
export const mongoDBURL = 'mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>?retryWrites=true&w=majority'
```

## Connecting to MongoDB using Mongoose
Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB. To connect to MongoDB using Mongoose, you will need to install the `mongoose` package. Run the following command in the terminal:
```bash
npm i mongoose
```
Now the `index.js` file in the `backend` directory should look something like this:
```javascript
import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";

const app = express();

app.get('/', (req, res) => {
    console.log(req);
    return res.status(234).send('Hello from server');
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
Hwew we include the `mongoose` package and use the `connect` method to connect to the MongoDB database. If the connection is successful, we start the server. If the connection fails, we log the error to the console. Now you can run the server using the following command:
```bash
cd backend #if you are not already in the backend directory
npm run dev
```
If the connection is successful, you should see the following message in the terminal:
```
Connected to MongoDB
Server is running on port 5000
```