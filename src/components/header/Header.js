import React from 'react';
import Navbar from '../navbar/Navbar';
import Button from '../button/Button';
// import { logo } from '../../assets/img';
import logo from '../../assets/img/Logo_CasadeChaupi.png';
import '../../styles/fonts.css';

const Header = () => {
	return (
		<header>
			<Navbar/>
			<div className="content">
				<img className="logo" alt="Logo Casa de Chaupi" src={logo} />
				<h1 className="content-title">
            Tarjetas desplegables
				</h1>
				<h2>
            tridimensionales
				</h2>
				<h4>
            Las tarjetas cobran vida y movimiento cada vez que las abres.
				</h4>
			</div>
			<Button />
		</header>
	);
};

export default Header;