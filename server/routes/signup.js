const router = require('express').Router();
const User = require('../models/user.js');

// VALIDATION
const Joi = require('joi');

const validationSchemaForSignUpUser = Joi.object({
	email: Joi.string()
		.pattern(/^[A-Za-z0-9._%+-]+@bluesapling.com$/)
		.required()
		.email()
		.max(255)
		.min(5),
	password: Joi.string().required().min(6).max(255),
	joining_date: Joi.string().required(),
	sick_leaves_taken_in_current_year: Joi.number().integer().min(0).max(12),
	casual_leaves_taken_in_current_year: Joi.number().integer().min(0).max(12),
	optional_leaves_taken_in_current_year: Joi.number().integer().min(0).max(12),
});

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
	console.log('======> request', req.body);
	console.log('======> error in JOI validation', error);

	if (!error) {
		try {
			const NewUser = new User(IncomingUserRequest);
			const savedUser = await NewUser.save();
			if (savedUser) {
				res.send('User Saved in Database Successfully');
				console.log('====> User Created Successfully');
			} else {
				res
					.status(504)
					.send({ sign_up_validation_errors: 'User Not Saved, Try Again' });
				console.log('====> User Created Successfully');
			}
		} catch (err) {
			res.status(400).end(err);
		}
	} else {
		res
			.status(400)
			.send({ sign_up_validation_errors: error.details[0].message });
	}
});

module.exports = router;
