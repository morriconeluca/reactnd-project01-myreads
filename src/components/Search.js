import React, {Component} from 'react';
import * as BooksAPI from '../BooksAPI';

class Search extends Component {
  state = {
    query: ''
  };

  debounceId = undefined;

  debounceSearch = () => {
    const {query} = this.state;

    if (!query) {
      this.props.updateBooksFound([]);
      return;
    }

    this.debounceId = setTimeout(() => {
      BooksAPI.search(query.trim()).then(books => {
        this.props.updateBooksFound(books);
      });
    }, 500)
  }

  handleChange = event => {
    if (this.debounceId) {
      clearTimeout(this.debounceId);
    }

    const {value} = event.target;
    const whiteSpaceAtBeginning = /^\s+/;
    this.setState(({query}) => ({
      query: whiteSpaceAtBeginning.test(value) ? query : value
    }), this.debounceSearch);
  };

  render() {
    return (
      <input
        type="search"
        className="search grow"
        value={this.state.query}
        placeholder="🔍 Search by title or author"
        onChange={this.handleChange}
      />
    );
  }
}

export default Search;