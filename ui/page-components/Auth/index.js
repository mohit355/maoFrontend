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
	CreateAccountButton,
} from './styles';

function PageSignin() {
	const router = useRouter();

	const [showInputOtp, setShowInputOtp] = useState(false);
	const [showButtonOtp, setShowButtonOtp] = useState(true);
	const [showLoginButton, setShowLoginButton] = useState(false);
	const [login, setLogin] = useState(true);

	const [{ loading }, executePost] = useRequest(
		{
			url: '/auth/signin',
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

	const onSendOtpClick = () => {
		setShowInputOtp(true);
		setShowButtonOtp(false);
		setShowLoginButton(true);
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
							<input type="number" placeholder="Phone Number" required />
							<input type="text" placeholder="Password" required />

							<LoginButton>Login</LoginButton>
							<hr />
							<CreateAccountButton type="submit" onClick={() => setLogin(false)}>
								Create New Account
							</CreateAccountButton>
						</Form>
					) : (
						<Form>
							<input type="number" placeholder="Phone Number" required />
							{showInputOtp && <input type="number" placeholder="Enter OTP" required />}
							{showButtonOtp && (
								<LoginButton onClick={() => onSendOtpClick()}>Send OTP</LoginButton>
							)}
							{showLoginButton && <LoginButton>Login</LoginButton>}
							<hr />
							<CreateAccountButton type="submit" onClick={() => setLogin(false)}>
								Create New Account
							</CreateAccountButton>
						</Form>
					)}
				</Flex>
			</Content>
		</Container>
	);
}

export default PageSignin;
