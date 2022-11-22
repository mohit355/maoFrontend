import styled from 'styled-components';
import Grid from '../../Grid';

const { Row: GridRow } = Grid;

export const TitleBlack = styled.div`
	font-weight: normal;
	font-size: 12px;
	line-height: 20px;
	text-align: center;
	display: inline-block;
	max-width: 100%;
	color: #000000;
	word-break: break-word;
	word-wrap: break-word;
	text-align: left;
`;

export const Row = styled(GridRow)`
	transition: 0.3s;
	border-bottom: 1px solid #e0e0e0;
	background: #ffffff;
	padding: 16px 20px 8px 20px;
	border-radius: 0px;
	margin: 0;
	display: flex !important;
	justify-content: space-between !important;
	cursor: pointer;

	&:hover {
		background: #f9f9f9;
	}

	outline: none;

	&:focus-visible {
		outline: auto blue;
	}

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

	&.expired {
		background: #fbe6e6;
	}

	@media (max-width: 768px) {
		border: 1px solid #e0e0e0;
		padding: 8px 10px 4px 10px;
	}
`;

export const Label = styled.caption`
	font-size: 8px;
	line-height: 12px;
	text-transform: capitalize;
	color: #4f4f4f;
	width: max-content;
	@media (min-width: 768px) {
		display: none;
	}
`;

export const EstTime = styled.div`
	display: flex;
	align-items: flex-start;
	flex-direction: column;
`;

export const StyledButton = styled.button`
	background: #ffffff;
	border-radius: 4px;
	border: 1px solid #2c3e50;
	color: #2c3e50;
`;

export const ButtonDiv = styled.div`
	display: flex;
	align-items: center;
`;

export const Pill = styled.div`
	margin: 0px;
	font-weight: normal;
	font-size: 12px;
	line-height: 16px;
	color: #000000;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	background: #fcedbf;
	border-radius: 4px;
	padding: 2px 6px;

	&.expired {
		background: #f7cdcd;
	}

	&.rejected {
		background: #f7cdcd;
	}

	&.draft {
		background: #eee;
	}

	&.booking_placed {
		background: rgb(230, 251, 233);
	}
`;

export const BookingDetailsContainer = styled.div`
	padding: 12px 16px;
	background: white;
	border: 1px solid #e0e0e0;
	border-radius: 10px;
	margin-bottom: 24px;
	width: 300px;
`;

export const LabelBook = styled.p`
	margin: 0px;
	font-weight: bold;
	font-size: 10px;
	line-height: 12px;
	text-transform: uppercase;
	color: rgb(189, 189, 189);
	display: inline-block;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	width: 100%;
`;

export const Value = styled.p`
	margin: 0px;
	font-weight: bold;
	font-size: 12px;
	line-height: 14px;
	color: #000000;
	width: 100%;
`;
export const Content = styled.p`
	padding: 12px 16px;
	background: white;
	border: 1px solid #e0e0e0;
	border-radius: 10px;
	margin-bottom: 24px;
	width: 300px;
`;
