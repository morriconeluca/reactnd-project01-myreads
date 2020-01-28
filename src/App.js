import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Loader from './components/Loader';
import BookshelvesPage from './components/BookshelvesPage';
import SearchPage from './components/SearchPage';

class App extends Component {
  state = {
    loading: true,
    myReads: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(data => {
      this.setState({
        myReads: data,
        loading: false
      });
    });
  }

  render() {
    return (
      <BrowserRouter>
        {this.state.loading ? <Loader /> :
          <Switch>
            <Route exact path="/" render={() => {
              return (
                <BookshelvesPage myReads={this.state.myReads} />
              );
            }}/>
            <Route path="/search" component={SearchPage}/>
          </Switch>
        }
      </BrowserRouter>
    );
  }
}

export default App;
