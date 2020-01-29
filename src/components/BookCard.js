import React from 'react';
import BookshelfChanger from './BookshelfChanger';

import coverPlaceholder from '../book-cover-placeholder.png'

function BookCard({id, title, authors, thumbnail, shelf, myReadsIds, updateMyReads}) {
  return (
    <li className="book-card centralize">
      <figure className="book">
        <img
          className="book-cover"
          src={thumbnail ? thumbnail : coverPlaceholder}
          alt={`Cover of ${title}`}
        />
        <BookshelfChanger
          bookId={id}
          shelf={shelf}
          myReadsIds={myReadsIds}
          updateMyReads={updateMyReads}
        />
      </figure>
      <header className="book-details centralize grow">
        <h3 className="book-title">{title}</h3>
        <p className="book-authors">
          {
            authors && authors.length > 0 ? authors.map((author, index) => (
              author + (index < authors.length - 1 ? ', ' : '')
            )) : 'Authors not provided'
          }
        </p>
      </header>
    </li>
  );
}

export default BookCard;