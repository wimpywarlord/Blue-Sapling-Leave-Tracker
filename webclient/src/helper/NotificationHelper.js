export const userFriendlyToastMessageConverter = (incomingMessage) => {
	if (
		incomingMessage.includes(
			'fails to match the required pattern: /^[A-Za-z0-9._%+-]+@bluesapling.com$/'
		)
	) {
		return 'Sing Up with your BlueSapling email.';
	} else {
		return '';
	}
};
