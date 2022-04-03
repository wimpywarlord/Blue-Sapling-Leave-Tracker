import React, { useState, useEffect } from 'react';
import NavBar from './Navbar';
import DashBoard from './DashBoard';

import '../css/Home.css';

import axios from 'axios';
import { getCookieStorage } from '../helper/cookieStorageHelper';
import { useNavigate } from 'react-router-dom';

const Home = (props) => {
	const { handleToastNotification } = props;

	const navigate = useNavigate();

	const [casualLeavesTakenInCurrentYear, setCasualLeavesTakenInCurrentYear] =
		useState(0);
	const [
		optionalLeavesTakenInCurrentYear,
		setOptionalLeavesTakenInCurrentYear,
	] = useState(0);
	const [sickLeavesTakenInCurrentYear, setSickLeavesTakenInCurrentYear] =
		useState(0);
	const [joiningDateOfUser, setJoiningDateOfUser] = useState('');

	useEffect(() => {
		axios
			.get('http://localhost:5000/', {
				headers: {
					'auth-token': getCookieStorage('auth-token'),
				},
			})
			.then((response) => {
				console.log('==============> response', response);
				const {
					casual_leaves_taken_in_current_year,
					optional_leaves_taken_in_current_year,
					sick_leaves_taken_in_current_year,
					joining_date,
				} = response?.data;
				setCasualLeavesTakenInCurrentYear(casual_leaves_taken_in_current_year);
				setOptionalLeavesTakenInCurrentYear(
					optional_leaves_taken_in_current_year
				);
				setSickLeavesTakenInCurrentYear(sick_leaves_taken_in_current_year);
				setJoiningDateOfUser(joining_date);
			})
			.catch((error) => {
				if (error?.response) {
					const { auth_error: errorMessage } = error?.response?.data;
					handleToastNotification({
						type: 'error',
						message: errorMessage,
					});
				} else {
					handleToastNotification({
						type: 'error',
						message: 'Check your Internet Connection.',
					});
				}
				navigate('/login');
			});
	});

	return (
		<div className='home-page-top-most-container-div'>
			<NavBar></NavBar>
			<DashBoard
				casualLeavesTakenInCurrentYear={casualLeavesTakenInCurrentYear}
				optionalLeavesTakenInCurrentYear={optionalLeavesTakenInCurrentYear}
				sickLeavesTakenInCurrentYear={sickLeavesTakenInCurrentYear}
				joiningDateOfUser={joiningDateOfUser}></DashBoard>
		</div>
	);
};

export default Home;
