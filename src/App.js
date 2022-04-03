import React, { useState } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './css/App.css';

import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import ToastNotification from './components/ToastNotification';

const App = () => {
	const [notificationMessage, setNotificationMessage] = useState('');
	const [notificationMessageType, setNotificationMessageType] = useState('');
	const [showToastNotification, setShowToastNotification] = useState(false);

	const handleToastNotification = (responseInfo) => {
		if (!showToastNotification) {
			setNotificationMessage(responseInfo?.message);
			setNotificationMessageType(responseInfo?.type);
			setShowToastNotification(true);
			setTimeout(() => {
				setShowToastNotification(false);
			}, 3000);
		}
	};

	const closeToastNotification = () => {
		setNotificationMessage('');
		setNotificationMessageType('');
		setShowToastNotification(false);
	};

	return (
		<div>
			<ToastNotification
				notificationMessage={notificationMessage}
				notificationMessageType={notificationMessageType}
				showToastNotification={showToastNotification}
				closeToastNotification={closeToastNotification}></ToastNotification>
			<BrowserRouter>
				<Routes>
					<Route
						path='/'
						element={<Home handleToastNotification={handleToastNotification} />}
					/>
					<Route
						path='/login'
						element={
							<Login handleToastNotification={handleToastNotification} />
						}
					/>
					<Route
						path='/signup'
						element={
							<SignUp handleToastNotification={handleToastNotification} />
						}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
