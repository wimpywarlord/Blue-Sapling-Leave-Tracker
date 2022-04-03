import React from 'react';
import NavBar from './Navbar';
import DashBoard from './DashBoard';

import '../css/Home.css';

import axios from 'axios';
import { getCookieStorage } from '../helper/cookieStorageHelper';
import { useNavigate } from 'react-router-dom';

const Home = (props) => {
	const navigate = useNavigate();

	axios
		.get('http://localhost:5000/', {
			headers: {
				'auth-token': getCookieStorage('auth-token'),
			},
		})
		.then((response) => {
			console.log('==============> response', response);
		})
		.catch((err) => {
			console.log('==============> err', err);
			navigate('/login');
		});

	return (
		<div className='home-page-top-most-container-div'>
			<NavBar></NavBar>
			<DashBoard></DashBoard>
		</div>
	);
};

export default Home;
