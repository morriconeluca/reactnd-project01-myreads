import React, {Component} from 'react';
import * as BooksAPI from '../BooksAPI';

class BookShelfChanger extends Component {
  state = {
    value: this.props.shelf || 'none'
  };

  updateBook = () => {
    const {bookId, updateMyReads} = this.props;
    BooksAPI.update({id: bookId}, this.state.value).then(() => {
      updateMyReads(bookId);
    });
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    }, this.updateBook);
  };

  render() {
    return (
      <select
        className="book-shelf-changer circle-icon-button"
        value={this.state.value}
        onChange={this.handleChange}
      >
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