import React from 'react';
import '../button/Button.css';

const Button = (props) => {
	return (
		<div>
			<button className="buy-card" onClick={() => props.handleClick(-1)}>QUIERO MI TARJETA</button>
		</div> 
	);
};

export default Button;