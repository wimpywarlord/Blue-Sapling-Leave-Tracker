const router = require('express').Router();
const User = require('../models/user.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
			const validPassword = await bcrypt.compare(
				req.body.password,
				userAlreadyExist.password
			);

			const token = jwt.sign(
				{
					_id: userAlreadyExist.id,
					email: userAlreadyExist.email,
				},
				process.env.TOKEN_SECRET
			);

			if (validPassword) {
				res
					.status(200)
					.header('auth-token', token)
					.send('Successfully Logged In.');
			} else {
				res.status(400).send({
					log_in_validation_errors: 'Username or Password is incorrect.',
				});
			}
		} else {
			res.status(400).send({
				log_in_validation_errors: 'Username or Password is incorrect.',
			});
		}
	} else {
		res
			.status(400)
			.send({ log_in_validation_errors: error.details[0].message });
	}
});

module.exports = router;
