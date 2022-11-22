import styled from 'styled-components';
import Grid from '../../Grid';

const { Row: GridRow } = Grid;

export const Row = styled(GridRow)`
	transition: 0.3s;
	border-bottom: 1px solid #e0e0e0;
	background: #ffffff;
	padding: 20px 20px 8px 20px;
	border-radius: 0px;
	display: flex !important;
	justify-content: space-between !important;
	cursor: not-allowed;
	margin: 0px !important;
	outline: none;

	@media (min-width: 768px) {
		&.side {
			background: #f9f9f9;
			border: none;
			padding: 8px 20px 0px 20px;

			&:hover {
				background: #ffffff;
			}
		}
	}

	@media (max-width: 768px) {
		border: 1px solid #e0e0e0;
		padding: 8px 10px 4px 10px;
	}
`;
