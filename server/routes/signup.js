const router = require('express').Router();
const User = require('../models/user.js');

const validationSchemaForSignUpUser = require('../validations/signUpUser');

router.post('/', async (req, res) => {
	const IncomingUserRequest = {
		email: req.body.email,
		password: req.body.password,
		joining_date: req.body.joining_date,
		sick_leaves_taken_in_current_year: parseInt(
			req.body.sick_leaves_taken_in_current_year
		),
		casual_leaves_taken_in_current_year: parseInt(
			req.body.casual_leaves_taken_in_current_year
		),
		optional_leaves_taken_in_current_year: parseInt(
			req.body.optional_leaves_taken_in_current_year
		),
	};

	const { error } = validationSchemaForSignUpUser.validate(IncomingUserRequest);

	const userAlreadyExist = await User.findOne({ email: req.body.email });

	if (!userAlreadyExist) {
		if (!error) {
			try {
				const NewUser = new User(IncomingUserRequest);
				const savedUser = await NewUser.save();
				if (savedUser) {
					res.status(200).send('User Saved in Database Successfully');
				} else {
					res
						.status(504)
						.send({ sign_up_validation_errors: 'User Not Saved, Try Again' });
				}
			} catch (err) {
				// TODO: CHECK THIS SCENARIO BY USING WRONG MONGO KEY
				res.status(400).send({
					sign_up_validation_errors: 'Some error Occurred, Please try again.',
				});
			}
		} else {
			res
				.status(400)
				.send({ sign_up_validation_errors: error.details[0].message });
		}
	} else {
		res.status(400).send({ sign_up_validation_errors: 'User already exists.' });
	}
});

module.exports = router;
