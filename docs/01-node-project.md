# Running express js

## Preface
Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It is an open-source framework developed and maintained by the Node.js foundation. It is designed for building web applications and APIs. It is the standard server framework for Node.js.

Before starting with express js, ensure that you have node.js, npm and a code editor installed on your system. The installation of node.js and npm can be verified by running the following commands in the terminal.
```bash
node -v
npm -v
```

In my environment I'm using node version `v20.11.1` and npm version `10.2.4` on a wsl environment.

You must also ensure that a `.gitignore` file is created in the root of the project directory. This file would contain the following lines:
```gitignore
node_modules/
```
This would prevent the `node_modules` directory from being pushed to the remote repository.

## Installing npm packages
To start a new project with express js, first create a new directory named `expressjs` and navigate to it. Run the following command within it.

```bash
npm init -y
```
This would create a `package.json` file with default values. Next, install the `express` and `nodemon` packages by running the following command.
```bash
npm i express nodemon
```
Here, `express` is the package that would be used to create the server and `nodemon` is a package that would be used to restart the server automatically when changes are made to the code.

## Changing the `package.json` file
A couple of changes would be made to the `package.json` file. The `type` field would be set to `module` and a new script would be added to the `scripts` field. The `scripts` field would look like this:
```json
"type": "module",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
```

## Coding 
Create a new file named `index.js` and add the following code to it.
```javascript
import express from "express";
import { PORT } from "./config.js";

const app = express();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
```
The `PORT` variable is imported from a file named `config.js` which would be created next. The `config.js` file would look like this:
```javascript
export const PORT = 5000;
```
## Running the server
To start the server, run the following command in the terminal.
```bash
npm run dev
```
This would start the server on port `5000`. To verify that the server is running, open a web browser and navigate to `http://localhost:5000`. You should see a message that says `Cannot GET /`.

## Epilogue
If you want to follow this tutorial section by section please refer to the git commit history.