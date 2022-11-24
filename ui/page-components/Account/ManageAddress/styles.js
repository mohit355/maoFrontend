import styled from 'styled-components';

export const Container = styled.div``;

export const Addresses = styled.div`
	display:flex;
	flec-wrap:wrap;
`;

export const ActionButtons = styled.div`
	display:flex;
	flex-description:'row'
	align-items:center;
	justify-content:space-around;
	${'' /* position:absolute; */}
	${'' /* bottom:-16px; */}
`;

export const Title = styled.h2`
	color: #8c8c8c;
	margin: 16px;
	margin-bottom: 40px;
`;

export const AddressContainer = styled.div`
	border: 1px solid #bfbfbf;
	padding: 16px;
	border-radius: 4px;
	margin: 16px;
	display:flex;
	flex-direction:column
`;

export const Type = styled.div`
	font-size: 16px;
	font-weight: 600;
	margin-bottom: 8px;
`;

export const FlexRow = styled.div`
	display: flex;
`;

export const FlexColumn = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Address = styled.div`
	font-size: 12px;
	color: #808080;
`;

export const Icon = styled.span`
	font-size: 8px;
	cursor:pointer;
`;
