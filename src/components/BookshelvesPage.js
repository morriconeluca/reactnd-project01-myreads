import React from 'react';
import {Link} from 'react-router-dom';

import Header from './Header';
import Bookshelf from './Bookshelf';

const BookshelvesPage = ({myReads, updateMyReads}) => {
  const shelves = [
    {
      type: 'currentlyReading',
      name: 'Currently Reading'
    },
    {
      type: 'wantToRead',
      name: 'Want to Read'
    },
    {
      type: 'read',
      name: 'Read'
    }
  ];

  return (
    <main role="main">
      <Header>
        <h1 className="bookshelves-page-title">My<span>Reads</span></h1>
      </Header>
      {
        shelves.map(shelf => (
          <Bookshelf
            key={shelf.type}
            books={myReads}
            shelf={shelf}
            updateMyReads={updateMyReads}
          />
        ))
      }
      <Link
        to="/search"
        className="add-link circle-icon-button"
      >
        Add New Book
      </Link>
    </main>
  );
};

export default BookshelvesPage;