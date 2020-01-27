import React from 'react';
import {Link} from 'react-router-dom';

import Header from './Header';
import Bookshelf from './Bookshelf';

const BookshelvesPage = ({myReads}) => {
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
        <h1 className="bookshelves-page-title"><span>My</span>Reads</h1>
      </Header>
      <Bookshelf books={myReads} shelf={shelves[0]} />
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