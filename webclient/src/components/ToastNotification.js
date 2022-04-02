import React, { useEffect } from 'react';
import Toast from 'react-bootstrap/Toast';

import '../css/ToastNotification.css';

import { userFriendlyToastMessageConverter } from '../helper/NotificationHelper';

const ToastNotification = (props) => {
	const {
		notificationMessageType,
		notificationMessage,
		closeToastNotification,
		showToastNotification,
	} = props;

	const toastMessageStylingDecider = (incomingNotificationMessageType) => {
		if (incomingNotificationMessageType === 'success') {
			return 'toast-notification-message-styling-success';
		} else if (incomingNotificationMessageType === 'error') {
			return 'toast-notification-message-styling-error';
		} else if (incomingNotificationMessageType === 'warning') {
			return 'toast-notification-message-styling-warning';
		} else if (incomingNotificationMessageType === 'info') {
			return 'toast-notification-message-styling-info';
		} else {
			return '';
		}
	};

	const toastMessageTitleDecider = (incomingNotificationMessageType) => {
		if (incomingNotificationMessageType === 'success') {
			return 'Operation Successful';
		} else if (incomingNotificationMessageType === 'error') {
			return 'Error Occurred';
		} else if (incomingNotificationMessageType === 'warning') {
			return 'Warning Message';
		} else if (incomingNotificationMessageType === 'info') {
			return 'Information Message';
		} else {
			return '';
		}
	};

	const userFriendlyMessage =
		userFriendlyToastMessageConverter(notificationMessage);

	return (
		<span>
			<Toast
				show={showToastNotification}
				className='toast-notification-styling'
				onClose={closeToastNotification}>
				<Toast.Header>
					<div
						className={
							notificationMessageType
								? toastMessageStylingDecider(notificationMessageType)
								: 'toast-notification-message-styling-backup'
						}></div>
					<strong className='me-auto'>
						{notificationMessageType
							? toastMessageTitleDecider(notificationMessageType)
							: 'Notification Message'}
					</strong>
					<small>1 second ago</small>
				</Toast.Header>
				<Toast.Body>
					{userFriendlyMessage ? userFriendlyMessage : notificationMessage}
				</Toast.Body>
			</Toast>
		</span>
	);
};

export default ToastNotification;
