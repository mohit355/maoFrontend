import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
    align-items: center;
    justify-content: center
`;

export const FlexContainer = styled.div`
	width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const FlexListItem = styled.div`
	display: flex;
	flex-direction: row;
	border:1px solid #a87d43;
	border-radius:4px;
	margin-bottom:12px;
	align-items: center;
    justify-content: space-between;
	padding:8px;

	.deleteFoodItem{
		cursor:pointer
	}
`;
