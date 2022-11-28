import React, { useState, useContext } from 'react';
import UserContext from '../../context/UserContext';
import '../login/Login.css';
import { useNavigate  } from 'react-router-dom';
import liria from '../../assets/img/Palacio-de-Liria-5.png';

const initialState = {
	email: '',
	password: ''    
};

const Login = ({user}) => {
	const [ userData, setUserData ] = useState(initialState);
	const { handleLoginWidthEmailAndPassword, error} = useContext(UserContext);
	const navigate = useNavigate();

	const handleInputChange = (target) => {
		setUserData({ ...userData, [target.name]: target.value });
	};


	return (
		<>
		<div className="login-container">
			<h2 className="main-text">LOGIN</h2>
			<form onSubmit={event => handleLoginWidthEmailAndPassword(event, userData)}>
				<input 
					type="email" 
					name="email" 
					value={userData.email}
					onChange={event => handleInputChange(event.target)}
					placeholder="Email Address"
					required/>
				<input 
					type="password" 
					name="password" 
					value={userData.password}
					onChange={event => handleInputChange(event.target)}
					placeholder="Password"
					required/>

				<button className="btn-login" type="submit">Login</button>
				{error && <p>{error}</p>}

				<p className="register-msn">¿No tienes cuenta? <a onClick={() => navigate('/register')}> Crea una ahora</a>.</p>
			</form>
		</div>
		
		<img className="register-forefront-image" alt="Palacio de Liria" src={liria} />
		</>
	);
};

export default Login;