import React from 'react';
import arnau from '../assets/img/Arnau-5.png';
import styles from '../styles/Home.css';
import blob from '../assets/img/blob.svg';

const Home = () => {
  return (
    <div className="arnau-container">
          <img className="arnau" alt="arnau" src={arnau} />
          <img className="blob" alt="blob" src={blob} />
    </div>
  )
}

export default Home;