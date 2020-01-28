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
    booksFound: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(data => {
      this.setState({
        myReads: data,
        loading: false
      });
    });
  }

  updateMyReads = (bookID) => {
    BooksAPI.get(bookID).then(bookFromAPI => {
      this.setState(({myReads}) => ({
        myReads: myReads.map(book => (
          book.id !== bookID ? book : bookFromAPI
        ))
      }));
    });
  };

  render() {
    return (
      <BrowserRouter>
        {this.state.loading ? <Loader /> :
          <Switch>
            <Route exact path="/" render={() => {
              return (
                <BookshelvesPage
                  myReads={this.state.myReads}
                  updateMyReads={this.updateMyReads}
                />
              );
            }}/>
            <Route path="/search" render={() => {
              return (
                <SearchPage
                  booksFound={this.state.booksFound}
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
