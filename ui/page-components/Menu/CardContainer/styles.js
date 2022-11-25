import styled from 'styled-components';

export const Container = styled.div`
	background: #ffffff;
	border-radius: 4px;
	padding: 16px;
	margin: 20px;
	width: 70%;
	@media (max-width: 768px) {
		width: 100%;
	}
`;

export const CardCont = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

export const Card = styled.div`
	padding: 12px;
	box-shadow: 5px 5px 20px rgba(0 0 0/0.15);
	width: 30%;
	margin: 16px;
	border-top: 5px solid #dbc3a4;
	transition: transform 200ms ease-in;
	border-radius: 0.75em;

	&:hover {
		transform: scale(1.03);
	}

	@media (max-width: 500px) {
		width: 92%;
	}

	@media (min-width: 501px) and (max-width: 768px) {
		width: 90%;
	}

	@media (min-width: 769px) and (max-width: 1200px) {
		width: 60%;
	}

	@media (min-width: 1200px) and (max-width: 1400px) {
		width: 40%;
	}
`;

export const Title = styled.div`
	color: #a87d43;
	font-family: 'Dancing Script', cursive;
	font-size: 40px;
	letter-spacing: 2px;
	text-transform: capitalize;
	text-align: center;
`;

export const Image = styled.img`
	width: 92px;
	height: 92px;
	box-shadow: rgba(128, 96, 51, 0.4) 0px 2px 4px, rgba(128, 96, 51, 0.3) 0px 7px 13px -3px,
		rgba(128, 96, 51, 0.2) 0px -3px 0px inset;

	border-radius: 8px;
`;

export const Row = styled.div`
	display: flex;
	max-width: 22%;
`;

export const TypeIcon = styled.div`
	margin-left: 10%;
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
`;

export const ItemDescription = styled.p`
	font-style: normal;
	font-weight: 500;
	font-size: 12px;
	line-height: 12px;
	color: #7c8083;
	margin: 8px 0;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	width: 60%;
	max-width: 100%;
`;

export const Price = styled.div`
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 14px;
	margin: 8px;
	margin-top: 0px;
	color: #4a4d4f;
	font-style: italic;
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	width: 172px;
	margin-left: 12px;

	.MuiButtonGroup-root {
		width: 78px;
		height: 24px;
		box-shadow: 0 2px 4px rgba(233, 219, 200, 0.9);

		.MuiButton-outlined {
			border: 1px solid #e9dbc8;
		}
	}

	.count {
		font-size: 14px;
		font-weight: 500;
		min-width: 20px !important;
		text-align: center;
		align-items: center;
		border-top: 1px solid #e9dbc8;
		border-bottom: 1px solid #e9dbc8;
	}

	.modal_count {
		font-size: 14px;
		font-weight: 600;
		text-align: center;
		margin-left: 20px;
	}

	.minusButton {
		border-right: none !important;
	}

	.plusButton {
		border-left: none !important;
	}
	.MuiPopover-root {
		.MuiPopover-paper {
			background: red;
		}
	}
`;

export const Count = styled.div``;

export const OrderButton = styled.button`
	width: 78px;
	height: 24px;
	cursor: pointer;
	font-size: 14px;
	border: none;
	outline: none;
	color: #fff;
	background: #b68949;
	box-shadow: 0 2px 4px rgba(128, 96, 51, 0.7);
	border-radius: 4px;
`;

export const Customize = styled.div`
	font-style: normal;
	font-weight: 500;
	font-size: 8px;
	color: #7c8083;
	margin: 4px;
	text-align: center;
`;
