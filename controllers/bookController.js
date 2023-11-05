// Creating a new book with predefined default values
const Book = require("./models/bookModel");

// Creating an array of new books
const newBooks = [
  {
    title: "Sample Book 1",
    author: "Sample Author 1",
    price: 9.99,
  },
  {
    title: "Sample Book 2",
    author: "Sample Author 2",
    price: 14.99,
  },
  {
    title: "Sample Book 3",
    author: "Sample Author 3",
    price: 7.99,
  },
  {
    title: "Sample Book 4",
    author: "Sample Author 4",
    price: 9.99,
  },
  {
    title: "Sample Book 5",
    author: "Sample Author 5",
    price: 9.99,
  },
  {
    title: "Sample Book 6",
    author: "Sample Author 6",
    price: 9.99,
  },
];

// Function to create and save multiple new books
const saveNewBooks = async (books) => {
  const savedBooks = [];
  for (const bookData of books) {
    try {
      const newBook = new Book(bookData);
      const savedBook = await newBook.save();
      savedBooks.push(savedBook);
    } catch (error) {
      console.error("Error saving a book:", error);
    }
  }
  return savedBooks;
};

// Calling the function to save multiple books
saveNewBooks(newBooks)
  .then((savedBooks) => {
    console.log("New books saved:", savedBooks);
  })
  .catch((error) => {
    console.error("Error saving new books:", error);
  });
