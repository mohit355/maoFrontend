import styled from 'styled-components';

export const Container = styled.div`
	.core-ui-input-root {
		border: 1px solid #e6e6e6;

		:focus-within {
			border: 1px solid #e6e6e6;
			box-shadow: none;
		}
	}

	.select {
		height: 20px;
	}

	.search-icon {
		width: 24px;
		height: 24px;
		margin-top: 5px;
		color: #808080;
	}
	.cross-icon {
		width: 20px;
		height: 20px;
		cursor: pointer;
		color: #b3b3b3;
	}
	.header-label {
		margin-right: 20px;
	}

	.header-select {
		margin-right: 20px;
	}
`;
