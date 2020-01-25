import React from 'react';
import {Link} from 'react-router-dom';

import Header from './Header';

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
      </Header>
    </main>
  );
};

export default SearchPage;