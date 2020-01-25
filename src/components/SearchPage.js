import React from 'react';
import {Link} from 'react-router-dom';

import Header from './Header';

const SearchPage = () => {
  return (
    <main role="main">
      <Header>
        Search Page
      </Header>
      <Link to="/">Go to Bookshelves Page</Link>
    </main>
  );
};

export default SearchPage;