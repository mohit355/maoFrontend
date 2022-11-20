import React, { useEffect, useState } from 'react';
import { useRequest } from '../../../helpers/request-helper';
import Order from './Order';

const Orders = () => {
	const [orders, setOrders] = useState([]);

	const [{ loading: getAllOrdersLoading }, getAllOrdersApi] = useRequest(
		{
			url: '/order/all',
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
	}, []);

	return (
		<div>
			<div>Filters</div>
			<div>
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
					/>
				))}
			</div>
		</div>
	);
};

export default Orders;
