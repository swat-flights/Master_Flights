/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import FlightSearchBox from '../components/FlightSearchBox';
import FilterMenu from '../components/FilterMenu';
import FlightCard from '../components/FlightCard';
import CollapsibleMenu from '../components/CollapsibleMenu';
import Footer from '../components/Footer';
import './styles/FlightResults.sass';

const FlightResults = props => {
  const [status, setStatus] = useState('inactive');
  const { from, departure, destination } = props.location.state;
  const [flightData, setState] = useState([]);

  const switchForMenu = () => {
    if (status === 'active') setStatus('inactive');
    else setStatus('active');
  };

  useEffect(() => {
    fetch(
      departure.length > 0
        ? `http://localhost:3002/api/v1/flight?departure_date=${departure}&departure=${from}&arrival=${destination}`
        : `http://localhost:3002/api/v1/flight?departure=${from}&arrival=${destination}`
    )
      .then(response => response.json())
      .then(data => setState(data.body));
  }, [departure]);

  return (
    <>
      <Header />
      <div className="searchForm">
        <FlightSearchBox noShadow />
      </div>
      <div className="mainSection">
        <div className="sideMenu">
          <FilterMenu />
        </div>
        <button className="filterBtn" type="button" onClick={switchForMenu}>
          <span className="material-icons">filter_alt</span>
        </button>
        <CollapsibleMenu status={status} changeStatus={switchForMenu} />
        <div className="results">
          {flightData.slice(0, 5).map(item => (
            <FlightCard data={item} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FlightResults;
