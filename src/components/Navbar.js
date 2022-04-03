import React from 'react';
import Row from 'react-bootstrap/Row';

import '../css/Navbar.css';

import smallLogo from '../static/bs-logo-small.png';

const NavBar = () => {
	return (
		<div className='nav-bar-top-most-container-div'>
			<Row className='make-things-center-x-and-y bs-small-logo-nav-bar-container'>
				<img
					className='bs-small-logo-img-tag-nav-bar'
					src={smallLogo}
					alt='bs-logo-small'></img>
			</Row>
			<hr className='hr-line-nav-bar' />
		</div>
	);
};

export default NavBar;
