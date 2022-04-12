import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';


import mapMarkerImg from '../images/map-marker.svg';

import '../styles/global.css';
import '../styles/pages/landing.css';

const Landing: React.FC = () => (
  <div id="page-landing">
    <div className="content-wrapper">
      <div>
      <img src={mapMarkerImg} alt="Happy" />
    <h1>Cidade Verde</h1>
      </div>

      <main>
        <h1>Leve felicidade para o mundo</h1>
        <p>
          A natureza agradece.
        </p>
      </main>

      <div className="location">
        <strong>Rio Grande do Norte</strong>
        <span>Natal</span>
      </div>

      <Link to="app" className="enter-app">
        <FiArrowRight name="arrow-right" size={26} color="rgba(0, 0, 0, 0.6)" />
      </Link>
    </div>
  </div>
);

export default Landing;
