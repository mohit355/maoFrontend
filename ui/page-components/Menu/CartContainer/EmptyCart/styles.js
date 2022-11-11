import styled from 'styled-components';

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

export const EmptyImage = styled.div`
	color: red;
	text-align: center;
	margin-top: 20%;
	svg {
		width: 80%;
		height: 80%;
		path {
			fill: #bdc0c1;
		}
	}
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
