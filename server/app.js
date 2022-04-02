// IMPORTS DEPENDENCIES
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// IMPORT FILES
const loginRoute = require('./routes/login');
const signUpRoute = require('./routes/signup');

// SETUP
const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();
const corsOptions = {
	origin: '*',
	credentials: true, //access-control-allow-credentials:true
	optionSuccessStatus: 200,
};
app.use(cors(corsOptions)); // Use this after the variable declaration

mongoose.connect(
	process.env.MONGO_DB_CONNECTION_KEY,
	{ useNewUrlParser: true },
	() => {
		console.log('Connected To DB Successfully.');
	}
);

// MIDDLEWARE
// This is to add a body parser that can understand request in json format
app.use(express.json());

// ROUTES
app.use('/login', loginRoute);
app.use('/signup', signUpRoute);

// SERVER LISTENER
app.listen(PORT, () => {
	console.log(`Server is up and running at PORT:${PORT}`);
});
