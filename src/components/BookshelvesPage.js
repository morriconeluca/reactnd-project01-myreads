import React from 'react';
import {Link} from 'react-router-dom';

const BookshelvesPage = () => {
  return (
    <main role="main">
      <h1>Bookshelves</h1>
      <Link to="/search">Go to Search Page</Link>
    </main>
  );
};

export default BookshelvesPage;