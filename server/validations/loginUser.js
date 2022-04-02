// VALIDATION
const Joi = require('joi');

const validationSchemaForLoginUser = Joi.object({
	email: Joi.string()
		.pattern(/^[A-Za-z0-9._%+-]+@bluesapling.com$/)
		.required()
		.email()
		.max(255)
		.min(5),
	password: Joi.string().required().min(6).max(1024),
});

module.exports = validationSchemaForLoginUser;
