import React from 'react';
import NavBar from './Navbar';
import DashBoard from './DashBoard';

import '../css/Home.css';

const Home = (props) => {
	return (
		<div className='home-page-top-most-container-div'>
			<NavBar></NavBar>
			<DashBoard></DashBoard>
		</div>
	);
};

export default Home;
