import React from 'react';
import {Link} from 'react-router-dom';

import Header from './Header';

const BookshelvesPage = () => {
  return (
    <main role="main">
      <Header>
        <h1 className="bookshelves-page-title"><span>My</span>Reads</h1>
      </Header>
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