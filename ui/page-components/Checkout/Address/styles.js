import styled from 'styled-components';

export const Container = styled.div``;

export const AddressCard = styled.div`
	border: 1px solid #caccce;
	padding: 20px;
	margin-bottom:10px;
`;

export const Title = styled.div`
	font-style: normal;
	font-weight: 700;
	font-size: 18px;
	line-height: 14px;
	color: #57595c;
`;

export const FullAddress = styled.p`
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 20px;
	color: #898c90;
`;

export const DeliverHere = styled.label`
	color: #ffffff;
	background: #b68949;
	border: none;
	padding: 12px;
	cursor: pointer;
	font-weight: 700;
	font-size: 14px;
	width:130px;
	display:flex;
	justify-content:center;
`;

export const AddNewAddress = styled.label`
	display: flex;
	align-items:center;
	justify-content:center;
	color: #ffffff;
	background: #b68949;
	border: none;
	padding: 12px;
	cursor: pointer;
	font-weight: 700;
	font-size: 14px;
	margin: auto;
	margin-top: 20px;
`;

export const ModalContainer = styled.div`
	background-color: #ffffff;
	width: 40%;
	height: auto;
	padding: 16px;
	margin: auto;
	margin-top: 10%;
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

export const AddButton = styled.button`
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
