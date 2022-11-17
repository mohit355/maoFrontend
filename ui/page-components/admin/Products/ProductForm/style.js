import styled from 'styled-components';

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	background: #fff;
	padding: 2rem;
	width: 530px;
	height: 380px;
	border-radius: 0.5rem;

	input, textarea, select {
		outline: none;
		padding: 0.8rem 1rem;
		margin-bottom: 0.8rem;
		font-size: 1.1rem;
		border-radius: 10px;
		background: #ffffff;
		color: #333333;
		border: 1px solid #a87d43;
	}

	input,textarea,select:focus {
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

		input,textarea,select {
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

export const Button = styled.button`
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