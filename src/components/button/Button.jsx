import React from 'react';
import styles from '../../styles/Button.css';

const Button = (props) => {
  return (
    <div>
        <button className="buy-card" onClick={()=> props.handleClick(-1)}>Quiero mi tarjeta</button>
    </div> 
  )
}

export default Button;