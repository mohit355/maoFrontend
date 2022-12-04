import styled from 'styled-components';

export const Container = styled.div`
	margin: 40px;
	.add_food {
		background: #333333;
		padding: 0.8rem 1rem;
		border-radius: 4px;
		font-size: 1rem;
		font-weight: 600;
		color: #fff;
		@media (max-width: 720px) {
			font-size: 0.8rem;
			padding: 0.4rem;
			width: 50%;
		}
	}

	.flex_container {
		justify-content: space-between;
		margin-top: 80px;
		@media (max-width: 720px) {
			flex-direction: column;
		}
	}

	.header-label {
		margin-right: 20px;
	}

	.header-select {
		margin-right: 20px;
	}
`;

export const Title = styled.h1`
	color: #333333;
	margin: 0px;
`;
