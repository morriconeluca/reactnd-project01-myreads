import React from 'react';
import BookCard from './BookCard';

function BooksList(props) {
  return (
    <main>
      <div className="myreads-top">
        <div className="container">
          <header className="myreads-header">
            <h1 className="list-books-title"><span>My</span>Reads</h1>
          </header>
        </div>
      </div>
      <section className="bookshelf">
        <div className="container">
          <header className="bookshelf-header">
            <h2 className="bookshelf-title">Currently Reading</h2>
          </header>
          <ul className="books-grid">
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
          </ul>
          <div className="bookshelf-no-books"></div>
        </div>
      </section>
    </main>
  );
}

export default BooksList;