import React from 'react';
import Pagination from '../Pagination';
import Header from './CardHeader';
import CardItem from './Carditem';
import LoadingState from './LoadingState';
import { Container } from './styles';
import FlexRow from '../styles';
import Empty from '../Empty';

const CardList = ({
	fields = [],
	data = [],
	loading = false,
	showCode = false,
	setGlobalFilters = () => {},
	// showContent = { heading: 'No Results found' },
	sort = {},
	setSort = () => {},
	statsLoading,
	pageLimit,
	showPagination = true,
	handleDeleteProduct = () => {},
	handleDeleteDiscount = () => {},
}) => {
	console.log('data', data);
	// const { list, page = 0, total_count = 0 } = data || {};
	const list = data;
	const handleRender = () => {
		if (loading) {
			return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
				return <LoadingState fields={fields} isLast={item === 10} />;
			});
		}

		return (list || []).map((item, i) => (
			<CardItem
				item={item}
				loading={loading}
				fields={fields}
				isLast={data?.list?.length === i + 1}
				handleDeleteProduct={handleDeleteProduct}
				handleDeleteDiscount={handleDeleteDiscount}
			/>
		));
	};

	return (
		<Container className="card-list-root">
			{!statsLoading && (
				<Header fields={fields} showCode={showCode} sort={sort} setSort={setSort} />
			)}
			{data.length === 0 ? (
				// <div
				// 	style={{
				// 		display: 'flex',
				// 		flexDirection: 'column',
				// 		alignItems: 'center',
				// 		justifyContent: 'center',
				// 	}}
				// >
				// 	<Empty style={{ height: '60vh', width: '60vw' }} />
				// 	<h3>No Food Product Added</h3>
				// </div>
				<Empty />
			) : (
				<div className="card-list-data">{handleRender()}</div>
			)}
			{/* {showPagination ? (
				<FlexRow
					style={{ justifyContent: 'flex-end', alignItems: 'center', marginTop: '10px' }}
				>
					<Pagination
						className="md"
						pageLimit={pageLimit || 10}
						total={total_count}
						pagination={page}
						setPagination={(val) => {
							setGlobalFilters({ page: val });
						}}
					/>
				</FlexRow>
			) : null} */}
		</Container>
	);
};

export default CardList;
