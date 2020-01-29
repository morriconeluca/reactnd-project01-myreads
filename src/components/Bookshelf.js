import React from 'react';
import BookCard from './BookCard';

function Bookshelf({books, shelf, myReadsIds, updateMyReads}) {
  books = !('error' in books) ? books.filter(book => {
    return !book.shelf || book.shelf === shelf.type
  }) : books;

  return (
    <section className="bookshelf centralize">
      <div className="container">
        {shelf &&
          <header className="bookshelf-header inner-container">
            <h2 className="bookshelf-title">{shelf.name}</h2>
          </header>
        }
        {!('error' in books) && books.length > 0
          ? (
            <ul className="books-grid centralize">
              {
                books.map(book => {
                  const {id, title, authors} = book;
                  const thumbnail = book.imageLinks ? book.imageLinks.thumbnail : undefined;
                  return (
                    <BookCard
                      key={id}
                      id={id}
                      title={title}
                      authors={authors}
                      thumbnail={thumbnail}
                      shelf={shelf}
                      myReadsIds={myReadsIds}
                      updateMyReads={updateMyReads}
                    />
                  );
                })
              }
            </ul>
          ) : (
            <div className="centralize">
              <p>{'error' in books ? 'No books found for this query.' : 'No books yet...'}</p>
            </div>
          )
        }
      </div>
    </section>
  );
}

export default Bookshelf;