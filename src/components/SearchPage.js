import React from 'react';
import {Link} from 'react-router-dom';

import Header from './Header';
import Search from './Search';

const SearchPage = () => {
  return (
    <main role="main">
      <Header>
        <Link
          to="/"
          className="back-link circle-icon-button"
          title="Back to Bookshelves"
        >
          Back to Bookshelves
        </Link>
        <Search />
      </Header>
    </main>
  );
};

export default SearchPage;