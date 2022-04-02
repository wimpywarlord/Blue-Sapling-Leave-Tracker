const router = require('express').Router();
const User = require('../models/user.js');
const bcrypt = require('bcryptjs');

const validationSchemaForLoginUser = require('../validations/loginUser');

router.post('/', async (req, res) => {
	const incomingUserRequest = {
		email: req.body.email,
		password: req.body.password,
	};

	console.log(incomingUserRequest);

	const { error } = validationSchemaForLoginUser.validate(incomingUserRequest);

	if (!error) {
		const userAlreadyExist = await User.findOne({ email: req.body.email });
		if (userAlreadyExist) {
			console.log('=========> userAlreadyExist', userAlreadyExist);
		} else {
			res.status(400).send({
				log_in_validation_errors: 'User does not exist, please Signup first.',
			});
		}
	} else {
		res
			.status(400)
			.send({ log_in_validation_errors: error.details[0].message });
	}
});

module.exports = router;
