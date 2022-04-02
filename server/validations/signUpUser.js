// VALIDATION
const Joi = require('joi');

const validationSchemaForSignUpUser = Joi.object({
	email: Joi.string()
		.pattern(/^[A-Za-z0-9._%+-]+@bluesapling.com$/)
		.required()
		.email()
		.max(255)
		.min(5),
	password: Joi.string().required().min(6).max(1024),
	joining_date: Joi.string().required(),
	sick_leaves_taken_in_current_year: Joi.number()
		.integer()
		.positive()
		.min(0)
		.max(12),
	casual_leaves_taken_in_current_year: Joi.number()
		.integer()
		.positive()
		.min(0)
		.max(8),
	optional_leaves_taken_in_current_year: Joi.number()
		.integer()
		.positive()
		.min(0)
		.max(5),
});

module.exports = validationSchemaForSignUpUser;
