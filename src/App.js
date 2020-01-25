import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import BookshelvesPage from './components/BookshelvesPage';
import SearchPage from './components/SearchPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={BookshelvesPage}/>
        <Route path="/search" component={SearchPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
