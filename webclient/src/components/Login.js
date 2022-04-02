import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { Link } from 'react-router-dom';
import axios from 'axios';

// CSS IMPORTS
import '../css/Login.css';
import logo from '../static/bs-logo.svg';

const Login = () => {
	const [isLoading, setIsLoading] = useState(false);
	const loginUser = () => {
		console.log('============>');
		setIsLoading(true);
		axios
			.post('http://localhost:5000/login')
			.then((response) => {
				console.log('======> RESPONSE', response);
			})
			.catch((err) => {
				console.log('======> ERRORS', err);
			});
	};

	return (
		<div className='login-top-most-container-div'>
			<div className='login-form-parent-container'>
				<Row className='mb-5'>
					<Row className='login-page-blue-sapling-logo-row-container mb-3'>
						<img
							className='login-page-blue-sapling-logo'
							src={logo}
							alt='blue-sapling-logo'
						/>
					</Row>
					<Row>
						<Form action='/login' method='POST'>
							<InputGroup className='mb-3 login-page-email-input-field-input-group-container'>
								<InputGroup.Text
									id='basic-addon1'
									className='login-page-email-input-field-icon'>
									<img
										src='https://img.icons8.com/color/28/000000/gmail--v1.png'
										alt='gmail-icon'
									/>
								</InputGroup.Text>
								<Form.Control
									type='email'
									className='login-page-email-input-field'
									placeholder='Email'
								/>
							</InputGroup>
							<InputGroup className='mb-3 login-page-password-input-field-input-group-container'>
								<InputGroup.Text
									id='basic-addon1'
									className='login-page-password-input-field-icon'>
									<img
										src='https://img.icons8.com/color/28/000000/forgot-password.png'
										alt='password-icon'
									/>
								</InputGroup.Text>
								<Form.Control
									className='login-page-password-input-field'
									type='password'
									placeholder='Password'
								/>
							</InputGroup>
						</Form>
					</Row>
					<Row className='login-page-sign-in-button-parent-container'>
						<div
							className='login-page-sign-in-button make-things-center-x'
							onClick={loginUser}>
							<span>Log In</span>
						</div>
					</Row>
					<Row className='mt-4'>
						<span className='login-page-sign-up-message make-things-center-x'>
							Do not have an account?
							<Link className='login-page-sing-up-link-tag' to='/signup'>
								<span className='login-page-sign-up-hyperlink'>Sign Up</span>
							</Link>
						</span>
					</Row>
				</Row>
			</div>
		</div>
	);
};

export default Login;
