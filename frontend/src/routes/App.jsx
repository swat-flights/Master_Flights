import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from '../page/LandingPage';
import FlightResults from '../page/FlightResults';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/flightResults" component={FlightResults} />
    </Switch>
  </BrowserRouter>
);

export default App;
