import styled from 'styled-components';

export const Container = styled.div`
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	background: green;

	@media (max-width: 500px) {
		font-size: 60%;
	}

	@media (min-width: 501px) and (max-width: 768px) {
		font-size: 60%;
	}

	@media (min-width: 769px) and (max-width: 1200px) {
		font-size: 60%;
	}
`;

export const HelpSection = styled.div`
	background-color: #504538;
	border-radius: 8px 0 0 8px;
	padding: 12px;
	position: absolute;
	right: 0;
	font-size: 12px;
	color: #ffffff;
	top: 20px;
`;

export const Content = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

export const Flex = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;

	@media (max-width: 500px) {
		display: flex;
		flex-direction: column;
	}

	@media (min-width: 501px) and (max-width: 768px) {
		display: flex;
		flex-direction: column;
	}

	@media (min-width: 769px) and (max-width: 1200px) {
		display: flex;
		flex-direction: column;
	}
`;

export const NameContent = styled.div`
	margin-right: 7rem;
	text-align: center;
	margin-top: 4em;

	p {
		font-size: 1.3rem;
		font-weight: 500;
		margin-bottom: 5rem;
		color: #624005;
	}

	@media (max-width: 500px) {
		margin: 0;
		text-align: center;
		display: none;
	}

	@media (min-width: 501px) and (max-width: 768px) {
		margin: 0;
		text-align: center;
		display: none;
	}

	@media (min-width: 769px) and (max-width: 1200px) {
		margin: 0;
		text-align: center;
	}
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	background: #fff;
	padding: 2rem;
	width: 530px;
	height: 380px;
	border-radius: 0.5rem;
	box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);

	input {
		outline: none;
		padding: 0.8rem 1rem;
		margin-bottom: 0.8rem;
		font-size: 1.1rem;
		border-radius: 10px;
		background: #ffffff;
		color: #333333;
		border: 1px solid #a87d43;
	}

	input:focus {
		border: 1px solid #a87d43;
	}

	a {
		text-decoration: none;
		text-align: center;
		font-size: 1rem;
		padding-top: 0.8rem;
		color: #a87d43;
	}

	hr {
		background: #f7f7f7;
		margin: 1rem;
	}

	@media (max-width: 500px) {
		width: 300px;
		height: fit-content;

		input {
			margin-bottom: 1rem;
			font-size: 1.5rem;
		}

		a {
			font-size: 1.5rem;
		}
	}

	@media (min-width: 501px) and (max-width: 768px) {
		width: 300px;
		height: fit-content;

		input {
			margin-bottom: 1rem;
			font-size: 1.5rem;
		}

		a {
			font-size: 1.5rem;
		}
	}

	@media (min-width: 769px) and (max-width: 1200px) {
		width: 300px;
		height: fit-content;

		input {
			margin-bottom: 1rem;
			font-size: 1.5rem;
		}

		a {
			font-size: 1.5rem;
		}
	}
`;

export const LoginButton = styled.button`
	outline: none;
	border: none;
	background: #a87d43;
	padding: 0.8rem 1rem;
	border-radius: 0.4rem;
	font-size: 1.1rem;
	color: #fff;

	:hover {
		cursor: pointer;
	}

	@media (max-width: 500px) {
		font-size: 1.5rem;
	}

	@media (min-width: 501px) and (max-width: 768px) {
		font-size: 1.5rem;
	}

	@media (min-width: 769px) and (max-width: 1200px) {
		font-size: 1.5rem;
	}
`;

export const AccountButton = styled.button`
	font-size: 1rem;
	color: #5936f0;
	text-decoration: underline;
	background: transparent;
	border: none;
	cursor: pointer;

	@media (max-width: 500px) {
		font-size: 1.5rem;
	}

	@media (min-width: 501px) and (max-width: 768px) {
		font-size: 1.5rem;
	}

	@media (min-width: 769px) and (max-width: 1200px) {
		font-size: 1.5rem;
	}
`;

export const AccountFlex = styled.div`
	display: flex;
	margin-left: auto;
	margin-right: auto;
`;
