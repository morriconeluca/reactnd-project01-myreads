import React from 'react';
import {Link} from 'react-router-dom';

import Header from './Header';
import Search from './Search';
import Bookshelf from './Bookshelf';

const SearchPage = ({booksFound, updateMyReads, updateBooksFound}) => {
  return (
    <main role="main">
      <Header>
        <Link
          to="/"
          className="back-link circle-icon-button"
          title="Back to Bookshelves"
          onClick={() => {updateBooksFound([]);}}
        >
          Back to Bookshelves
        </Link>
        <Search updateBooksFound={updateBooksFound} />
      </Header>
      <Bookshelf
        books={booksFound}
        updateMyReads={updateMyReads}
      />
    </main>
  );
};

export default SearchPage;