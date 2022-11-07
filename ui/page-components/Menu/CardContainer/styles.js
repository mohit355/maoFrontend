import styled from 'styled-components';

export const Container = styled.div`
	background: #ffffff;
	border-radius: 4px;
	padding: 16px;
	margin: 16px;
`;

export const CardCont = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

export const Card = styled.div`
	padding: 12px;
	box-shadow: 5px 5px 20px rgba(0 0 0/0.15);
	width: 25%;
	margin: 20px;
	border-top: 5px solid #dbc3a4;
	transition: transform 200ms ease-in;
	border-radius: 0.75em;

	&:hover {
		transform: scale(1.03);
	}
`;

export const Title = styled.div`
	color: #a87d43;
	font-family: 'Dancing Script', cursive;
	font-size: 40px;
	letter-spacing: 2px;
	line-height: 0.8;
	margin: 0px;
	position: relative;
	text-transform: capitalize;
	text-align: center;
`;

export const Image = styled.img`
	width: 108px;
	height: 108px;
	box-shadow: rgba(128, 96, 51, 0.4) 0px 2px 4px, rgba(128, 96, 51, 0.3) 0px 7px 13px -3px,
		rgba(128, 96, 51, 0.2) 0px -3px 0px inset;

	border-radius: 8px;
`;

export const FlexRow = styled.div`
	display: flex;
`;

export const TypeIcon = styled.div`
	margin-left: auto;
	svg {
		width: 24px;
		height: 24px;
	}
`;

export const ItemName = styled.div`
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 14px;
	color: #4a4d4f;

	.MuiSvgIcon-root {
		width: 16px;
		height: 16px;
		color: #c7ad85;
	}
`;

export const Price = styled.div`
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 14px;
	margin: 12px;
	color: #4a4d4f;
	font-style: italic;
`;

export const FlexColumn = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 20px;
	margin-top: 12px;

	.MuiButtonGroup-root {
		width: 92px;
		height: 28px;
		box-shadow: 0 2px 4px rgba(233, 219, 200, 0.9);

		.MuiButton-outlined {
			border: 1px solid #e9dbc8;
		}
	}
`;

export const OrderButton = styled.button`
	width: 92px;
	height: 28px;
	cursor: pointer;
	padding: 7px 25px;
	font-size: 1rem;
	border: none;
	outline: none;
	color: #fff;
	background: #b68949;
	box-shadow: 0 2px 4px rgba(128, 96, 51, 0.7);
	border-radius: 4px;
`;
