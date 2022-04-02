import React, { useState } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './css/App.css';

import Login from './components/Login';
import SignUp from './components/SignUp';
import ToastNotification from './components/ToastNotification';

const App = () => {
	const [notificationMessage, setNotificationMessage] = useState('');
	const [notificationMessageType, setNotificationMessageType] = useState('');
	const [showToastNotification, setShowToastNotification] = useState(false);

	const handleToastNotification = (responseInfo) => {
		setNotificationMessage(responseInfo?.type);
		setNotificationMessageType(responseInfo?.message);
		setShowToastNotification(true);
	};

	return (
		<div>
			<ToastNotification
				notificationMessage={notificationMessage}
				notificationMessageType={notificationMessageType}></ToastNotification>
			<BrowserRouter>
				<Routes>
					<Route path='/login' element={<Login />} />
					<Route
						path='/signup'
						element={
							<SignUp handleToastNotification={handleToastNotification} />
						}
					/>
					{/* <Route path='expenses' element={<Expenses />} />
				<Route path='invoices' element={<Invoices />} /> */}
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
