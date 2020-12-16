/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import FlightSearchBox from '../components/FlightSearchBox';
import FilterMenu from '../components/FilterMenu';
import FlightCard from '../components/FlightCard';
import Spinner from '../components/Spinner';
import CollapsibleMenu from '../components/CollapsibleMenu';
import Footer from '../components/Footer';
import './styles/FlightResults.sass';

const FlightResults = props => {
  const [status, setStatus] = useState('inactive');
  const { from, departure, destination } = props.location.state;
  const [flightData, setState] = useState({
    status: 'loading',
    info: {},
    data: [],
  });

  const switchForMenu = () => {
    if (status === 'active') setStatus('inactive');
    else setStatus('active');
  };

  const nextInfo = () => {
    fetch(flightData.info.next)
      .then(response => response.json())
      .then(data =>
        setState({
          ...flightData,
          status: 'complete',
          info: data.body.info,
          data: data.body.results,
        })
      );
  };

  const previousInfo = () => {
    fetch(flightData.info.prev)
      .then(response => response.json())
      .then(data =>
        setState({
          ...flightData,
          status: 'complete',
          info: data.body.info,
          data: data.body.results,
        })
      );
  };

  useEffect(() => {
    fetch(
      departure.length > 0
        ? `http://localhost:3002/api/v1/flight?departure_date=${departure}&departure=${from}&arrival=${destination}`
        : `http://localhost:3002/api/v1/flight?departure=${from}&arrival=${destination}`
    )
      .then(response => response.json())
      .then(data =>
        setState({
          ...flightData,
          status: 'complete',
          info: data.body.info,
          data: data.body.results,
        })
      );
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
        {flightData.status === 'complete' ? (
          <div className="results">
            {flightData.data.map(item => (
              <FlightCard data={item} />
            ))}
            <div className="mainSection__buttons">
              <button
                className="mainSection__buttons__page"
                type="button"
                onClick={previousInfo}
              >
                {' '}
                Previous
              </button>
              <button
                className="mainSection__buttons__page"
                type="button"
                onClick={nextInfo}
              >
                {' '}
                Next
              </button>
            </div>
          </div>
        ) : (
          <Spinner />
        )}
      </div>
      <Footer />
    </>
  );
};

export default FlightResults;
