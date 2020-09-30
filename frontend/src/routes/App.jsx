import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from '../page/LandingPage';
import Flight from '../components/FilterMenu';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/flight" component={Flight} />
    </Switch>
  </BrowserRouter>
);

export default App;
