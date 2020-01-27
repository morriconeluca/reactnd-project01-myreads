import React from 'react';
import BookShelfChanger from './BookShelfChanger';

function BookCard({title, authors, shelf, thumbnail}) {
  return (
    <li className="book-card fadeIn">
      <figure className="book">
        <img
          className="book-cover"
          src={thumbnail}
          alt={`Cover of ${title}`}
        />
        <BookShelfChanger shelf={shelf} />
      </figure>
      <header className="book-details">
          {
            authors.map((author, index) => (
              <p className="book-authors" key={index}>{author}</p>
            ))
          }
        <h3 className="book-title">{title}</h3>
      </header>
    </li>
  );
}

export default BookCard;