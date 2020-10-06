import React from 'react';
import Header from '../components/Header';
import FlightSearchBox from '../components/FlightSearchBox';
import FilterMenu from '../components/FilterMenu';
import FlightCard from '../components/FlightCard';
import Footer from '../components/Footer';
import './styles/FlightResults.sass';

const FlightResults = () => {
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
