import styled from 'styled-components';
import CaretIcon from '../caret.svg';
import SortIcon from '../sort-icon-up-down.svg';

export const CardTitle = styled.div`
	font-weight: 600;
	font-size: 14px;
	line-height: 16px;
	color: #000000;
	display: flex;
	align-items: center;

	&.icon {
		width: 100%;
		justify-content: center;
	}
`;

export const Caret = styled(CaretIcon)`
	margin-left: 5px;
	width: 12px;
	transform: ${({ sortType }) => (sortType === true ? 'rotate(180deg)' : 'rotate(0)')};
	transition: transform 0.3s ease-in-out;
	cursor: pointer;
`;

export const SortIconUpDown = styled(SortIcon)`
	margin-left: 5px;
	width: 12px;
	transform: ${({ sortType }) => (sortType === true ? 'rotate(180deg)' : 'rotate(0)')};
	cursor: pointer;
`;
