import React, {Component} from 'react';
import * as BooksAPI from '../BooksAPI';

class Search extends Component {
  state = {
    query: '',
    debounceId: undefined
  };

  debounceSearch = () => {
    const {query} = this.state;

    if (!query) {
      return;
    }

    this.setState({
      debounceId: setTimeout(() => {
        BooksAPI.search(query.trim()).then(data => {
          console.log(JSON.stringify(data));
        });
      }, 200)
    });
  }

  handleChange = event => {
    const {debounceId} = this.state;

    if (debounceId) {
      clearTimeout(debounceId);
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
        className="search"
        value={this.state.query}
        placeholder="Search by title or author"
        onChange={this.handleChange}
      />
    );
  }
}

export default Search;