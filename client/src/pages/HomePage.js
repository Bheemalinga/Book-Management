import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout"; // Make sure the import path is correct

const HomePage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Replace with your actual API endpoint
    fetch("http://localhost:3000/api/books")
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  return (
    <Layout>
      <h1>Bookstore</h1>
      <div className="book-container">
        {books.slice(0, 6).map((book) => (
          <div
            key={book._id}
            className="book-card"
            style={{ width: "300px", height: "300px" }}
          >
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Price: ${book.price}</p>
            <p>Description: {book.description}</p>
          </div>
        ))}
      </div>
      <div className="col-md-4">
        <p className="text-justify">
          <h2>Work in progress</h2>
          <br></br>
          <br></br>
          <h2> But - About, Privacy Policy, Contact are done</h2>
        </p>
      </div>
    </Layout>
  );
};

export default HomePage;
