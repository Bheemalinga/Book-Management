const express = require("express");
const dotenv = require("dotenv");

// configuring the env file
dotenv.config();

// creating the rest object
const app = express();

//creating rest api
app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

const PORT = process.env.PORT || 8000;

//listening the app
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
