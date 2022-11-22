import React from 'react';

import IconCaretRight from './caret-right.svg';

import { PageP, Row } from './styles';

const FinitePagination = ({
	total = 0,
	page = 1,
	pageLimit = 10,
	setPagination,
	className = '',
}) => {
	const totalPage = Math.ceil(total / pageLimit);
	const topCount = Math.max((page - 1) * pageLimit + 1, 0);
	const lastCount = totalPage !== page ? page * pageLimit : total;

	const mdPaginationTitle = `Showing Results ${
		total === 0 ? '0 - 0 of 0' : `${topCount} - ${lastCount} out of ${total}`
	}`;
	const smPaginationTitle = `${page}/${totalPage}`;

	return (
		<Row className={className}>
			<PageP>{className.includes('md') && mdPaginationTitle}</PageP>
			<IconCaretRight
				width={4}
				height={10}
				cursor={page > 1 ? 'pointer' : 'not-allowed'}
				onClick={page > 1 ? () => setPagination(page - 1) : () => setPagination(1)}
				fill={page === 1 ? '#356EFD' : '#bdbdbd'}
				style={{
					margin: '0px 16px',
					transform: 'rotate(180deg)',
				}}
			/>
			<PageP>{className.includes('sm') && smPaginationTitle}</PageP>
			<IconCaretRight
				onClick={
					page < totalPage
						? () => setPagination(page + 1)
						: () => setPagination(totalPage)
				}
				cursor={page < totalPage ? 'pointer' : 'not-allowed'}
				width={4}
				height={10}
				fill={page === totalPage ? '#356EFD' : '#bdbdbd'}
				style={{ margin: '0px 16px' }}
			/>
		</Row>
	);
};

export default FinitePagination;
