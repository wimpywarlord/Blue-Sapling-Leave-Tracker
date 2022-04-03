export const userFriendlyToastMessageConverter = (incomingMessage) => {
	if (
		incomingMessage.includes(
			'fails to match the required pattern: /^[A-Za-z0-9._%+-]+@bluesapling.com$/'
		)
	) {
		return 'Kindly use your BlueSapling email.';
	} else {
		return '';
	}
};
