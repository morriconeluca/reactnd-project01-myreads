import React from 'react';
import BookCard from './BookCard';

function Bookshelf({books, shelf}) {
  return (
    <section className="bookshelf">
      <div className="container">
        {shelf &&
          <header className="bookshelf-header inner-container">
            <h2 className="bookshelf-title">{shelf.name}</h2>
          </header>
        }
        {books.length > 0
          ? (
            <ul className="books-grid">
              {
                books.filter(book => {
                  return book.shelf && book.shelf === shelf.type
                }).map(book => {
                  const {title, authors} = book;
                  return (
                    <BookCard title={title} authors={authors} shelf={shelf} />
                  );
                })
              }
            </ul>
          ) : (
            <div className="bookshelf-no-books"></div>
          )
        }
      </div>
    </section>
  );
}

export default Bookshelf;