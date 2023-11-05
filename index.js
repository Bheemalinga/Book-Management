// type != commonjs. So, used the import statement

// type = module. Thus, used the import statement
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import bookRoutes from "./routes/authBooks.js";

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
app.use("/api/books", authRoutes);

// creating rest api
app.get("/", (req, res) => {
  res.send(
    "<h1>Hello world</h1><br><br><h2>Welcome to the Ecommerce App</h2> <h2> Built by Me and ChatGpt</h2><h2>But still in Progress</h2>"
  );
});

// Enabling CORS for all routes
app.use(cors());
app.use(
  cors({
    origin: "http://localhost:8080/",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Handle preflight requests
app.options("*", cors());

const PORT = process.env.PORT || 8000;

// listening the app
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
