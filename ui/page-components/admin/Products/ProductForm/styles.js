import styled from 'styled-components';

export const Container = styled.div`
	margin: 40px;
	display: flex;
	flex-direction: column;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	background: #fff;
	padding: 2rem;
	width: 60%;
	height: auto;
	border-radius: 8px;
	margin: 20px;
	margin-left: auto;
	margin-right: auto;

	label {
		margin-bottom: 4px;
		font-style: normal;
		font-weight: 600;
		font-size: 16px;
		line-height: 14px;
		color: #57595c;
	}

	input,
	textarea,
	select {
		outline: none;
		padding: 0.6rem 0.8rem;
		margin-bottom: 1rem;
		font-size: 15px;
		border-radius: 4px;
		background: #ffffff;
		color: #57595c;
		border: 1px solid #57595c;
	}

	input,
	textarea,
	select:focus {
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

		input,
		textarea,
		select {
			margin-bottom: 1rem;
			font-size: 14px;
		}

		a {
			font-size: 14px;
		}
	}

	@media (min-width: 501px) and (max-width: 768px) {
		width: 300px;
		height: fit-content;

		input {
			margin-bottom: 1rem;
			font-size: 14px;
		}

		a {
			font-size: 14px;
		}
	}

	@media (min-width: 769px) and (max-width: 1200px) {
		width: 300px;
		height: fit-content;

		input {
			margin-bottom: 1rem;
			font-size: 14px;
		}

		a {
			font-size: 14px;
		}
	}
`;

export const Button = styled.button`
	outline: none;
	border: none;
	background: #a87d43;
	padding: 0.8rem 1rem;
	border-radius: 4px;
	font-size: 1.1rem;
	font-weight: 600;
	color: #fff;

	:hover {
		cursor: pointer;
	}

	@media (max-width: 500px) {
		font-size: 1rem;
	}

	@media (min-width: 501px) and (max-width: 768px) {
		font-size: 1rem;
	}

	@media (min-width: 769px) and (max-width: 1200px) {
		font-size: 1rem;
	}
`;

export const Title = styled.h1`
	color: #a87d43;
`;
