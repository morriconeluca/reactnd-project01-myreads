import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import BookshelvesPage from './components/BookshelvesPage';
import SearchPage from './components/SearchPage';

class App extends Component {
  state = {
    myReads: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(data => {
      this.setState({
        myReads: data
      });
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <BookshelvesPage myReads={this.state.myReads} />
            );
          }}/>
          <Route path="/search" component={SearchPage}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
