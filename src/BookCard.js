import React, {Component} from 'react';

class BookCard extends Component {
  render() {
    return (
      <article className="book-card">
        <figure className="book">
          <img src="http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api" alt="Book's Title Cover" />
        </figure>
        <h3 className="book-title">To Kill a Mockingbird</h3>
        <p className="book-authors">Harper Lee</p>
      </article>
    );
  }
}

export default BookCard;