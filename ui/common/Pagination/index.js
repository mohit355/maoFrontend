import React from 'react';
import IconCaretLeft from './caret.svg';
import { PaginationContainer, Flex } from './styles';

import mergeClassNames from '../utils/merge-class-names';

import Pagination2 from './Pagination';

import IconCaretLeftPagination2 from './caretLeftPagination2.svg';
import IconCaretRightPagination2 from './caretRightPagination2.svg';
/**
 * Renders a Pagination Component
 * @param {number} 		[props.pagination] - Number of Page
 * @param {func} 		[props.setPagination=()=>{}] - callBack function when page changes
 * @param {number} 		[props.total] - Total count of items
 * @param {number}		[props.pageRange] - Display Page range
 * @param {number}		[props.pageLimit] - set Page limit
 */

const Pagination = ({
	pagination,
	setPagination,
	total,
	pageRange = 5,
	pageLimit = 10,
	id_prefix = 'pagination',
	className = '',
}) => {
	const pageCount = Math.ceil(total / pageLimit);

	const handlePageChange = ({ selected }) => {
		setPagination(selected + 1);
	};

	const isPaginationPresent = ['xl', 'lg'].some((paginationType) =>
		className.includes(paginationType),
	);

	return (
		<nav aria-label="pagination">
			{isPaginationPresent ? (
				<PaginationContainer
					previousLabel={
						className.includes('xl') ? (
							<IconCaretLeft style={{ transform: 'rotate(0deg)' }} />
						) : (
							<Flex style={{ marginLeft: '12px' }}>
								<IconCaretLeftPagination2 />
								<Flex>
									<IconCaretLeftPagination2 style={{ marginRight: '2px' }} />
									<IconCaretLeftPagination2 />
								</Flex>
							</Flex>
						)
					}
					nextLabel={
						className.includes('xl') ? (
							<IconCaretLeft />
						) : (
							<Flex>
								<IconCaretRightPagination2 />
								<Flex style={{ marginLeft: '12px' }}>
									<IconCaretRightPagination2 style={{ marginRight: '2px' }} />
									<IconCaretRightPagination2 />
								</Flex>
							</Flex>
						)
					}
					forcePage={pagination - 1}
					pageCount={pageCount}
					pageRangeDisplayed={pageRange}
					marginPagesDisplayed={1}
					pageClassName="page"
					onPageChange={handlePageChange}
					id={id_prefix}
					className={mergeClassNames('paginationContainer', className)}
				/>
			) : (
				<Pagination2
					className={className}
					total={total}
					page={pagination}
					setPagination={setPagination}
					pageLimit={pageLimit}
				/>
			)}
		</nav>
	);
};

export default Pagination;
