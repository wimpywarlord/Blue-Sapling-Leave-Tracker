export const getCookieStorage = (cookieName) => {
	let name = cookieName + '=';
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) === ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) === 0) {
			return c.substring(name.length, c.length);
		}
	}
	return '';
};

export const setCookieStorage = (cookieName, cookieValue, expiryMins) => {
	const d = new Date();
	d.setTime(d.getTime() + expiryMins * 60 * 1000);
	let expires = 'expires=' + d.toUTCString();
	document.cookie = cookieName + '=' + cookieValue + ';' + expires + ';path=/';
};
