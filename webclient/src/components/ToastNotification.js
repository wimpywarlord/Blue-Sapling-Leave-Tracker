import React from 'react';
import Toast from 'react-bootstrap/Toast';

import '../css/ToastNotification.css';

const ToastNotification = (props) => {
	const { notificationMessageType, notificationMessage } = props;

	const toastMessageStylingDecider = () => {
		if ((notificationMessageType = 'success')) {
			return '';
		} else if ((notificationMessageType = 'error')) {
			return '';
		} else if ((notificationMessageType = 'warning')) {
			return '';
		} else if ((notificationMessageType = 'info')) {
			return '';
		} else {
			return '';
		}
	};

	return (
		<span>
			<Toast show={true} className='toast-notification-styling'>
				<Toast.Header>
					{/* <img src='' className='rounded me-2' alt='' /> */}
					<div>0</div>
					<strong className='me-auto'>Bootstrap</strong>
					<small>11 mins ago</small>
				</Toast.Header>
				<Toast.Body>{notificationMessage}</Toast.Body>
			</Toast>
		</span>
	);
};

export default ToastNotification;
