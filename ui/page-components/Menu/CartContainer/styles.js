import styled from 'styled-components';

export const Container = styled.div`
	background: #ffffff;
	border-radius: 4px;
	padding: 16px;
	margin: 20px;
	width: 25%;
	padding-top: 5%;
	position: fixed;
	right: 0;
	@media (max-width: 768px) {
		width: 90%;
		bottom: 0;
		height: 25%;
		overflow: auto;
	}
`;

export const Title = styled.div`
	font-style: normal;
	font-weight: 700;
	font-size: 26px;
	line-height: 14px;
	color: #4a4d4f;
`;

export const Description = styled.p`
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 24px;
	color: #898d90;
`;

export const Line = styled.div`
	border-bottom: 1px dotted #caccce;
	margin-top: 20px;
	margin-bottom: 40px;
`;

export const SubTotal = styled.div`
	font-style: normal;
	font-weight: 700;
	font-size: 18px;
	color: #4a4d4f;
`;

export const Checkout = styled.button`
	background: #a87d43;
	border: none;
	padding: 8px 16px;
	cursor: pointer;
	box-shadow: 0 2px 4px rgba(233, 219, 200, 0.9);
	font-weight: 600;
	font-size: 16px;
	&:hover {
		transform: scale(1.03);
	}
`;
