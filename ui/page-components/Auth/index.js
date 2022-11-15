import React, { useState } from 'react';

import { useRouter } from 'next/router';

import { useRequest } from '../../helpers/request-helper';

import {
	Container,
	HelpSection,
	Content,
	Flex,
	NameContent,
	Form,
	LoginButton,
	AccountButton,
	AccountFlex,
} from './styles';

function PageSignin() {
	const router = useRouter();

	const [showInputOtp, setShowInputOtp] = useState(false);
	const [showButtonOtp, setShowButtonOtp] = useState(true);
	const [showLoginButton, setShowLoginButton] = useState(false);
	const [showSignupButton, setShowSignupButton] = useState(false);
	const [login, setLogin] = useState(true);
	const [mobileNumberError, setMobileNumberError] = useState(null);
	const [otpError, setOtpError] = useState(null);
	const [otpSessionId, setOtpSessionId] = useState('');
	const [signupDetails, setSignupDetails] = useState({
		name: '',
		phoneNumber: '',
		otp_entered_by_user: '',
		password: '',
	});
	const [signInDetails, setSignInDetails] = useState({
		phoneNumber: '',
		password: '',
	});

	const [{ loading }, executePost] = useRequest(
		{
			url: '/auth/signin',
			method: 'POST',
		},
		{ manual: true },
	);
	const [{ loading: sendOTPLoading }, sendOTPApi] = useRequest(
		{
			url: '/sendOTP/reisterOTP',
			method: 'POST',
		},
		{ manual: true },
	);
	const [{ loading: verifyOTPLoading }, verifyOTPApi] = useRequest(
		{
			url: '/sendOTP/verifyOTP',
			method: 'POST',
		},
		{ manual: true },
	);
	const [{ loading: signUpLoading }, signUpApi] = useRequest(
		{
			url: '/signup',
			method: 'POST',
		},
		{ manual: true },
	);

	const SubmitDetails = (values) => {
		executePost({
			data: values,
		})
			.then(() => {
				router.push('/admin');
				refetch();
				message.success('Welcome to Cogoport CMS 🎉');
			})
			.catch((error) => {
				message.error(error.response.data.messages[0]);
			});
	};
	const onSignUpClick = async () => {
		await router.push('/admin/signup');
	};

	const onSendOtpClick = async (event) => {
		event.preventDefault();
		if (signupDetails.phoneNumber) {
			setMobileNumberError('');
			await sendOTPApi({
				data: {
					phoneNumber: signupDetails.phoneNumber,
				},
			})
				.then((result) => {
					console.log('RESULT OTP ', result);
					setOtpSessionId(result.data.Details);
				})
				.catch((err) => {
					console.log('error ', err);
				});
		} else if (signupDetails.phoneNumber.length < 10) {
			setMobileNumberError('Invalid phone number');
		}
	};

	const onVerifyOTPClick = async (event) => {
		event.preventDefault();
		if (signupDetails.otp_entered_by_user) {
			await verifyOTPApi({
				data: {
					session_id: otpSessionId,
					otp_entered_by_user: signupDetails.otp_entered_by_user,
				},
			})
				.then((result) => {
					console.log('RESULT OTP ', result);
					// setOtpSessionId(result.Details)
					setShowSignupButton(true);
				})
				.catch((err) => {
					console.log('error ', err);
				});
		} else {
			setOtpError('otp required');
		}
	};

	const handleSignUpChange = (event) => {
		const { value } = event.target;
		const key = event.target.name;

		setSignupDetails((prev) => {
			return { ...prev, [key]: value };
		});
	};

	const handleSignUp = async (event) => {
		event.preventDefault();
		console.log(signupDetails);
		if (signupDetails.password) {
			await signUpApi({
				data: signupDetails,
			})
				.then((result) => {
					console.log('RESULT signup ', result);
					localStorage.setItem('afjalMao-x-access-token', result.data.token);
					router.push('/');
				})
				.catch((err) => {
					console.log('error ', err);
				});
		} else {
		}
	};

	return (
		<Container>
			<HelpSection>
				<div>Need any help?</div>
				<div>help@afzalmao.com</div>
			</HelpSection>
			<Content>
				<Flex>
					<NameContent>
						<div>
							<img
								style={{ height: '180px' }}
								alt="cogo-logo"
								src="https://cogoport-testing.sgp1.digitaloceanspaces.com/e46a66b49abf496d9b4ba99ba5266893/am-logo.png"
							/>
						</div>
						<p>Login to explore delicious delicacy</p>
					</NameContent>
					{login ? (
						<Form>
							<input type="tel" name="phoneNumber" placeholder="Phone Number" required />
							<input type="password" name="password" placeholder="Password" required />
							<LoginButton>Login</LoginButton>
							<hr />
							<AccountFlex>
								New to Mao
								<AccountButton onClick={() => setLogin(false)}>
									Create New Account
								</AccountButton>
							</AccountFlex>
						</Form>
					) : (
						<Form>
							<input
								type="text"
								name="name"
								placeholder="User name"
								maxLength="10"
								value={signupDetails.name}
								required
								onChange={handleSignUpChange}
							/>
							<input
								type="tel"
								name="phoneNumber"
								placeholder="Phone Number"
								maxLength="10"
								value={signupDetails.phoneNumber}
								required
								onChange={handleSignUpChange}
							/>
							{mobileNumberError && <p style={{ color: 'red' }}> {mobileNumberError} </p>}
							{otpSessionId && (
								<>
									<input
										name="otp_entered_by_user"
										disabled={showSignupButton && true}
										type="password"
										value={signupDetails.otp_entered_by_user}
										onChange={handleSignUpChange}
										placeholder="Enter OTP"
										required
									/>
									<span>{showSignupButton && 'otp verified'}</span>
									{otpError && <p style={{ color: 'red' }}> {otpError} </p>}
								</>
							)}
							{otpSessionId === '' && (
								<LoginButton onClick={onSendOtpClick}>Send OTP</LoginButton>
							)}
							{otpSessionId && showSignupButton === false && (
								<LoginButton onClick={onVerifyOTPClick}>Verify OTP</LoginButton>
							)}
							{showSignupButton && (
								<>
									<input
										name="password"
										type="password"
										value={signupDetails.password}
										onChange={handleSignUpChange}
										placeholder="Enter password"
										required
									/>
									<LoginButton onClick={handleSignUp}>Signup</LoginButton>
								</>
							)}
							<hr />
							<AccountFlex>
								Already have an account
								<AccountButton onClick={() => setLogin(true)}>Login</AccountButton>
							</AccountFlex>
						</Form>
					)}
				</Flex>
			</Content>
		</Container>
	);
}

export default PageSignin;
