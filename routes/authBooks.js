import express from "express";
import book from "../models/bookModel.js";

//
// import { book } from "../models/bookModel.js";

// Creating the router object
const router = express.Router();
// GET books
router.get("/books", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
