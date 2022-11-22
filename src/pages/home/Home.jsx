import React from 'react';
import arnau from '../../assets/img/Arnau-5.png';
import estrella from '../../assets/img/Sagrada-estrella-3.png';
import liria from '../../assets/img/Palacio-de-Liria-5.png';
import blob from '../../assets/img/blob.svg';
import '../../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
          <img className="home-forefront-image" alt="arnau" src={liria} />
          <div className="home-background">
            <img className="home-background-image" alt="blob" src={blob} />
          </div>
    </div>
  )
}

export default Home;