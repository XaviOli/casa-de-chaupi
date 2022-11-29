import React from 'react'
import { aboutbg } from '../../assets/img';
import '../about/About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-main">
        <img className="about-img-container" src={aboutbg} alt='background About' />
      </div>
    </div>
  )
}

export default About;