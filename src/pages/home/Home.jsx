import React from 'react';
import arnau from '../../assets/img/Arnau-cumple-26.png';
import eternals from '../../assets/img/Eternals-9.png';
import liria from '../../assets/img/Palacio-de-Liria-5.png';
import blob from '../../assets/img/blob.svg';
import '../home/Home.css'

const Home = () => {
	return (
		<div className="home-container">
			<img className="home-forefront-image" alt="arnau" src={arnau} />
			<img className="home-forefront-image" alt="eternals" src={eternals} />
			<img className="home-forefront-image" alt="chimichurri" src={liria} />
			<div className="home-background">
				<img className="home-background-image" alt="blob" src={blob} />
			</div>
		</div>
	);
};

export default Home;