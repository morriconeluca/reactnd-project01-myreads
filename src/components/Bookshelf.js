import React from 'react';
import BookCard from './BookCard';

function Bookshelf({books, shelf, updateMyReads}) {
  books = books.filter(book => {
    return !book.shelf || book.shelf === shelf.type
  });

  return (
    <section className="bookshelf centralize">
      <div className="container">
        {shelf &&
          <header className="bookshelf-header inner-container">
            <h2 className="bookshelf-title">{shelf.name}</h2>
          </header>
        }
        {books.length > 0
          ? (
            <ul className="books-grid centralize">
              {
                books.map(book => {
                  const {id, title, authors, imageLinks: {thumbnail}} = book;
                  return (
                    <BookCard
                      key={id}
                      id={id}
                      title={title}
                      authors={authors}
                      thumbnail={thumbnail}
                      shelf={shelf}
                      updateMyReads={updateMyReads}
                    />
                  );
                })
              }
            </ul>
          ) : (
            <div className="centralize">
              <p>No books yet...</p>
            </div>
          )
        }
      </div>
    </section>
  );
}

export default Bookshelf;