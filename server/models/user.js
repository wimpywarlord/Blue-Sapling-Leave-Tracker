const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	joining_date: {
		type: Date,
		required: true,
	},
	sick_leaves_taken_in_current_year: {
		type: Number,
		required: true,
	},
	casual_leaves_taken_in_current_year: {
		type: Number,
		required: true,
	},
	optional_leaves_taken_in_current_year: {
		type: Number,
		required: true,
	},
});

module.exports = mongoose.model('User', userSchema);
