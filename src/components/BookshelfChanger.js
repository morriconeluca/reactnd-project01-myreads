import React, {Component} from 'react';
import * as BooksAPI from '../BooksAPI';

class BookshelfChanger extends Component {
  state = {
    value: ''
  };

  getShelf = () => {
    const {shelf, myReadsIds, bookId} = this.props;
    if (shelf) {
      return shelf.type;
    } else {
      for (let shelf in myReadsIds) {
        if (myReadsIds[shelf].includes(bookId)) {
          return shelf;
        }
      }
    }
    return 'none'
  }

  componentDidMount() {
    this.setState({
      value: this.getShelf()
    });
  }

  updateBook = () => {
    const {bookId, updateMyReads} = this.props;
    BooksAPI.update({id: bookId}, this.state.value).then(myReadsIds => {
      updateMyReads(bookId, myReadsIds);
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

export default BookshelfChanger;