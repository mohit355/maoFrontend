import styled from 'styled-components';

export const Container = styled.div`
	margin: 12px 10px;
	.card-list-header-root {
		background: #666666;
		border-radius: 8px;
		height: 40px;
		align-items: center;
		padding: 10px;
		margin: 0px 8px 16px 8px !important;
	}
	.card-list-root {
		border: none;
	}
	.card-list-header-title {
		color: #ffffff !important;
	}
	.card-body-row {
		margin: 0px 8px 0px 8px !important;
		border-radius: 8px;
		margin-top: 12px !important;
		border: 1px solid #bfbfbf;
	}
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
	border: 1px solid #a87d43;
	border-radius: 4px;
	margin-bottom: 12px;
	align-items: center;
	justify-content: space-between;
	padding: 8px;

	.deleteFoodItem {
		cursor: pointer;
	}
`;
