import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Loader from './components/Loader';
import BookshelvesPage from './components/BookshelvesPage';
import SearchPage from './components/SearchPage';

class App extends Component {
  state = {
    loading: true,
    myReads: [],
    myReadsIds: {},
    booksFound: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      const myReadsIds = {
        currentlyReading: [],
        wantToRead: [],
        read: []
      };

      books.forEach(book => {
        myReadsIds[book.shelf].push(book.id);
      });

      this.setState({
        myReads: books,
        myReadsIds: myReadsIds,
        loading: false
      });
    });
  }

  updateMyReads = (bookId, myReadsIds) => {
    BooksAPI.get(bookId).then(bookFromAPI => {
      this.setState(({myReads}) => ({
        myReads: myReads.filter(book => (
          book.id !== bookId
        )).concat(bookFromAPI),
        myReadsIds
      }));
    });
  };

  updateBooksFound = books => {
    this.setState({
      booksFound: books
    });
  }

  render() {
    return (
      <BrowserRouter>
        {this.state.loading ? <Loader /> :
          <Switch>
            <Route exact path="/" render={() => {
              return (
                <BookshelvesPage
                  myReads={this.state.myReads}
                  myReadsIds={this.state.myReadsIds}
                  updateMyReads={this.updateMyReads}
                />
              );
            }}/>
            <Route path="/search" render={() => {
              return (
                <SearchPage
                  booksFound={this.state.booksFound}
                  updateBooksFound={this.updateBooksFound}
                  myReadsIds={this.state.myReadsIds}
                  updateMyReads={this.updateMyReads}
                />
              );
            }}/>
          </Switch>
        }
      </BrowserRouter>
    );
  }
}

export default App;
