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

	console.log("orders ", orders);

	return (
		<div>
			<div style={{display:"flex",alignItems:"center",justifyContent:'space-between'}}>
				<div>
					<input type="text" placeholder='enter food item name or Id' />
				</div>
				<div>
					<label>Outlet Name</label>
					<select>
						<option>outlet1</option>
						<option>outlet2</option>
					</select>
					<label>Order Status</label>
					<select>
						<option>All</option>
						<option>Order received</option>
						<option>Preparing</option>
					</select>
				</div>
			</div>

			
			<div style={{display: "flex",flexDirection: "column",alignItems: "center",margin:"12px"}}>
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
					/>
				))}
			</div>
		</div>
	);
};

export default Orders;
