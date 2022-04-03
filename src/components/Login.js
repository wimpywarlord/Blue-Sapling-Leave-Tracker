import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { setCookieStorage } from '../helper/cookieStorageHelper';

import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

// CSS IMPORTS
import '../css/Login.css';
import logo from '../static/bs-logo.svg';

const Login = (props) => {
	const [isLoading, setIsLoading] = useState(false);
	const [userLoginEmail, setUserLoginEmail] = useState('');
	const [userLoginPassword, setUserLoginPassword] = useState('');

	const navigate = useNavigate();

	const { handleToastNotification } = props;

	const loginUser = () => {
		setIsLoading(true);
		if (!isLoading) {
			axios
				.post('http://localhost:5000/login', {
					email: userLoginEmail,
					password: userLoginPassword,
				})
				.then((response) => {
					setCookieStorage('auth-token', response?.headers['auth-token'], 15);
					handleToastNotification({
						type: 'success',
						message: response?.data,
					});
					setIsLoading(false);
					navigate('/');
				})
				.catch((error) => {
					if (error?.response) {
						const { log_in_validation_errors: errorMessage } =
							error?.response?.data;
						handleToastNotification({
							type: 'error',
							message: errorMessage,
						});
					} else {
						handleToastNotification({
							type: 'error',
							message: 'Check your internet Connection.',
						});
					}
					setIsLoading(false);
				});
		}
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
									value={userLoginEmail}
									onChange={(event) => {
										setUserLoginEmail(event.target.value);
									}}
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
									value={userLoginPassword}
									onChange={(event) => {
										setUserLoginPassword(event.target.value);
									}}
								/>
							</InputGroup>
							<Row className='login-page-sign-in-button-parent-container'>
								<div
									className='login-page-sign-in-button make-things-center-x'
									onClick={loginUser}>
									<span>Log In</span>
								</div>
							</Row>
						</Form>
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
