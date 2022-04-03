const router = require('express').Router();
const authMiddleware = require('./verifyToken');
const User = require('../models/user');

router.get('/', authMiddleware, async (req, res) => {
	const userInformation = await User.findOne({
		_id: req.user._id,
		email: req.user.email,
	});

	delete userInformation.password;

	if (userInformation) {
		res.status(200).send(userInformation);
	} else {
		res.status(504).send({
			home_page_user_fetch_details_error:
				'Some error occurred, Please try again.',
		});
	}
});

module.exports = router;
