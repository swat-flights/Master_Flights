import React from 'react';
import Header from '../components/Header';
import FlightSearchBox from '../components/FlightSearchBox';
import DiscountCard from '../components/DiscountCard';
import Step from '../components/Step';
import Footer from '../components/Footer';
import MobilePicture from '../assets/mobilePicture.png';
import './styles/LandingPage.sass';

const LandingPage = () => {
  return (
    <>
      <Header />
      <div className="background">
        <div className="background__image"> </div>
        <div className="background__searchbox">
          <FlightSearchBox />
        </div>
      </div>
      <div className="Discounts">
        <h2>Destinos recomendados</h2>
        <div className="Discounts__container">
          <DiscountCard />
          <DiscountCard />
          <DiscountCard />
          <DiscountCard />
        </div>
      </div>
      <div className="process">
        <h2>En tan solo tres pasos</h2>
        <div className="process__steps">
          <Step />
          <Step />
          <Step />
        </div>
      </div>
      <div className="mobile">
        <div className="mobile__feature">
          <h2>Feature 1</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum qui
            et, eos possimus, rerum nihil obcaecati quasi eius molliti.
          </p>
        </div>
        <img className="mobile__picture" src={MobilePicture} alt="" />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
