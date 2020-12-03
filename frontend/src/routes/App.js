import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from '../page/LandingPage';
import CreateFlights from '../page/AdminAddFlights';
import EditFlights from '../page/AdminEditFlights';
import DeleteFlights from '../page/AdminDeleteFlights';
import FlightResults from '../page/FlightResults';

const App = () => (
  <BrowserRouter>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/createFlights" component={CreateFlights} />
    <Route exact path="/editFlights/:id" component={EditFlights} />
    <Route exact path="/deleteFlights" component={DeleteFlights} />
    <Route exact path="/flightResults" component={FlightResults} />
  </BrowserRouter>
);

export default App;
