import React, { useState } from 'react';
import Header from '../components/Header';
import FlightSearchBox from '../components/FlightSearchBox';
import FilterMenu from '../components/FilterMenu';
import FlightCard from '../components/FlightCard';
import CollapsibleMenu from '../components/CollapsibleMenu';
import Footer from '../components/Footer';
import './styles/FlightResults.sass';

const FlightResults = () => {
  const [status, setStatus] = useState('inactive');

  const switchForMenu = () => {
    if (status === 'active') setStatus('inactive');
    else setStatus('active');
  };

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
          <FlightCard />
          <FlightCard />
          <FlightCard />
          <FlightCard />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FlightResults;
