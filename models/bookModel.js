import mongoose from "mongoose";

// Creating a book schema
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "No description available",
  },
  price: {
    type: Number,
    required: true,
  },
  genre: {
    type: String,
    default: "General",
  },
  publicationDate: {
    type: Date,
    default: Date.now, // Setting the default value to the current date and time
  },
});

const book = mongoose.model("Books", bookSchema);

export default book;
