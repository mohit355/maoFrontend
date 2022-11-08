import styled from 'styled-components';

export const Container = styled.div``;

export const Title = styled.h2`
	color: #8c8c8c;
	margin: 16px;
	margin-bottom: 40px;
`;

export const PastOrder = styled.div`
	border: 1px solid #bfbfbf;
	padding: 16px;
	border-radius: 2px;
	margin: 16px;
`;

export const FoodName = styled.div`
	font-size: 16px;
	font-weight: 600;
	margin-bottom: 8px;
`;

export const OrderImage = styled.img`
	width: 108px;
	height: 108px;
	box-shadow: rgba(128, 96, 51, 0.4) 0px 2px 4px, rgba(128, 96, 51, 0.3) 0px 7px 13px -3px,
		rgba(128, 96, 51, 0.2) 0px -3px 0px inset;
	border-radius: 4px;
`;

export const FlexRow = styled.div`
	display: flex;
`;

export const FlexColumn = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 12px;
`;

export const OrderDetail = styled.div`
	font-size: 12px;
	color: #808080;
`;

export const TotalPaid = styled.div`
	font-size: 14px;
	color: #666666;
	margin-top: 8px;
`;
