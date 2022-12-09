import React, { useEffect, useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import Select from 'react-select';
import { isMobile } from 'react-device-detect';
import { useRequest } from '../../../helpers/request-helper';
import Order from './Order';
import Input from '../../../common/Input';
import { Container } from './styles';
import { FlexRow } from '../../../common/styles';
import { outlets } from '../../../common/SelectOutlets';

const Orders = () => {
	const [orders, setOrders] = useState([]);
	const orderStatus = [
		{ value: '', label: 'All' },
		{ value: 'order_received', label: 'Order Received' },
		{ value: 'preparing', label: 'Preparing' },
		{ value: 'Out for delivery', label: 'Out for delivery' },
		{ value: 'Delivered', label: 'Delivered' },
	];
	const [searchedOrderId, setSearchedOrderId] = useState('');
	const [selectedOutletName, setSelectedOutletName] = useState({
		value: '',
		label: 'All',
	});
	const [selectedOrderStatus, setSelectedOrderStatus] = useState({
		value: '',
		label: 'All',
	});

	const [{ loading: getAllOrdersLoading }, getAllOrdersApi] = useRequest(
		{
			url: `/order/all?status=${selectedOrderStatus.value}&orderId=${searchedOrderId}&outletName=${selectedOutletName.value}`,
			method: 'GET',
		},
		{ manual: true },
	);

	useEffect(() => {
		getAllOrdersApi({
			headers: {
				'x-access-token': localStorage.getItem('afjalMao-x-access-token'),
			},
		})
			.then((result) => {
				setOrders(result.data.data);
			})
			.catch(() => {});
	}, [searchedOrderId, selectedOutletName, selectedOrderStatus]);

	return (
		<Container>
			<FlexRow
				style={{
					flexDirection: isMobile ? 'column' : 'row',
					alignItems: 'center',
					justifyContent: 'space-between',
					margin: '100px 80px 20px 80px',
				}}
			>
				<Input
					prefix={<SearchIcon className="search-icon" />}
					suffix={
						<CloseIcon onClick={() => setSearchedOrderId('')} className="cross-icon" />
					}
					style={{ width: '260px', marginInline: '10px' }}
					onChange={(e) => setSearchedOrderId(e.target.value)}
					value={searchedOrderId}
					placeholder="Search by #order id"
					type="text"
				/>

				<FlexRow
					style={{
						flexDirection: isMobile ? 'column' : 'row',
						alignItems: 'center',
						width: '500px',
					}}
				>
					<label className="header-label">Outlet Name</label>
					<Select
						onChange={setSelectedOutletName}
						value={selectedOutletName}
						options={outlets}
						className="header-select"
					/>
					<label className="header-label">Order Status</label>
					<Select
						onChange={setSelectedOrderStatus}
						value={selectedOrderStatus}
						options={orderStatus}
					/>
				</FlexRow>
			</FlexRow>

			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					margin: '12px',
				}}
			>
				<h4>Total active orders: {orders.length}</h4>
				{JSON.stringify(orders)}
				{orders.map((order) => (
					<Order
						key={order.id}
						id={order.id}
						status={order.status}
						suggestion={order.suggestion}
						orderedProduct={order.product}
						User={order.User}
						orderId={order.orderId}
						DeliveryAddress={order.Address}
						orderTime={order.createdAt}
						outletName={order.outletName}
						modeOfPayment={order.modeOfPayment}
						totalPayableAmount={order.totalPayableAmount}
						totalDiscountedAmount={order.totalDiscountedAmount}
					/>
				))}
			</div>
		</Container>
	);
};

export default Orders;
