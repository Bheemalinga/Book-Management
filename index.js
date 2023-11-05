// type != commonjs. Thus, commented the below code
// const express = require("express");
// const dotenv = require("dotenv");
// const mongoose = require("mongoose");
// const morgan = require("morgan");
// const { default: connectDB } = require("./config/db.js");

// type = module. Thus, used the import statement
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";

// configuring the env file
dotenv.config();

// database configuration
connectDB();

// creating the rest object
const app = express();

//middlewares, used to modify the request and response object
app.use(express.json()); //for parsing the request body
app.use(morgan("dev")); //for logging the request in the console

// routes
app.use("/api/auth", authRoutes);

// creating rest api
app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1><br><br><h2>Welcome to the Ecommerce App</h2>");
});

const PORT = process.env.PORT || 8000;

// listening the app
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
