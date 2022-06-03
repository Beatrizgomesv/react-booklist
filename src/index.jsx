import React from "react";
import "./styles/index.css";
import {books} from './components/books';
import Book from './components/Book'

function BookList() {
  return (
    <section className="booklist">
    {books.map((book) => {
      return <Book key={book.id} {...book}></Book>;
    })}
    </section>
  );
}

export default BookList



