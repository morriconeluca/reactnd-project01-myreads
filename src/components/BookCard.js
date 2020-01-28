import React from 'react';
import BookShelfChanger from './BookShelfChanger';

function BookCard({title, authors, shelf, thumbnail}) {
  return (
    <li className="book-card centralize">
      <figure className="book">
        <img
          className="book-cover"
          src={thumbnail}
          alt={`Cover of ${title}`}
        />
        <BookShelfChanger shelf={shelf} />
      </figure>
      <header className="book-details centralize grow">
        <h3 className="book-title">{title}</h3>
        <p className="book-authors">
          {
            authors.map((author, index) => (
              author + (index < authors.length - 1 ? ', ' : '')
            ))
          }
        </p>
      </header>
    </li>
  );
}

export default BookCard;