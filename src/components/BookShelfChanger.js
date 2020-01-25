import React, {Component} from 'react';

class BookShelfChanger extends Component {
  render() {
    return (
      <select className="book-shelf-changer">
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    );
  }
}

export default BookShelfChanger;