const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
	const token = req.header('auth-token');
	if (!token) {
		res.status(400).send('Invalid-Token');
	} else {
		try {
			const verified = jwt.verify(token, process.env.TOKEN_SECRET);
			if (!verified) {
				res.status(400).send('Invalid-Token');
			} else {
				// THIS ADDING USER TO OUR REQ OBJECT
				// WHICH WILL BE AVAILABLE INSIDE EACH ROUTE.
				req.user = verified;
				// This command is used to instruct node to use next middle ware/ proceed.
				next();
			}
		} catch (err) {
			res.status(400).send('Invalid-Token');
		}
	}
};
