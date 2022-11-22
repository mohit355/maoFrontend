import ReactPaginate from 'react-paginate';
import React from 'react';
import styled from 'styled-components';

const PaginationWrapper = ({ className, ...props }) => (
	<ReactPaginate {...props} containerClassName={className} />
);

const PaginationContainer = styled(PaginationWrapper)`
	list-style: none;
	display: flex;
	margin: 0px;
	margin-top: 24px;
	padding: 0px;
	margin-bottom: 24px;

	li {
		height: 44px;
		width: 54px;
		color: #485264;
		background-color: white;

		border: 1px solid #d6d6d6;
		border-right-width: 0;

		font-size: 14px;
		font-weight: 600;
		cursor: pointer;

		a {
			height: 100%;
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		svg {
			display: block;
			fill: #485264;
		}

		&.page:nth-last-child(2) {
			border-top-right-radius: 5px;
			border-bottom-right-radius: 5px;
			border-right-width: 1px;
		}

		&.previous {
			border-top-left-radius: 5px;
			border-bottom-left-radius: 5px;
			transform: rotate(180deg);

			svg {
				transform: scale(-1);
			}
		}

		&.next {
			margin-left: 8px;
			border-right-width: 1px;
			border-radius: 5px;
		}

		&.disabled,
		&.selected {
			color: #bdbdbd;
			background-color: #e8e8e8;

			svg {
				fill: #bdbdbd;
			}
		}
	}

	@media (max-width: 768px) {
		padding-bottom: 64px;
	}
`;

const Flex = styled.div`
	display: flex;
`;

export { PaginationContainer, Flex };
