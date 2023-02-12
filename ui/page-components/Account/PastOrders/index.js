import React, { useEffect, useState } from 'react';
import { useRequest } from '../../../helpers/request-helper';

import {
	Container,
	Title,
	PastOrder,
	FoodName,
	OrderImage,
	FlexRow,
	FlexColumn,
	OrderDetail,
	TotalPaid,
} from './styles';

const PastOrders = () => {

	const [{ loading: getAllOrdersLoading }, getAllOrdersApi] = useRequest(
		{
			url: `/order/all?status=delivered`,
			method: 'GET',
		},
		{ manual: true },
	);

	const [orders, setOrders] = useState([])


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
		
	}, [])

	const showOrderTime = (orderTime) => {
		const dateObj = new Date(orderTime);
		const date = dateObj.getUTCDate();
		const month = dateObj.getUTCMonth();
		const year = dateObj.getUTCFullYear();
		const localString=dateObj.toLocaleTimeString();
		return (
			<span>{`${date}-${month}-${year}, ${localString.substring(0,2)%12}:${dateObj.toLocaleTimeString().substring(3,5)} ${localString.substring(0,2) < 12 ? 'AM' : 'PM'}`}</span>
		);
	};
	


	return (
		<Container>
			<Title>Past Orders</Title>

			{orders.map(order=>{
				return <>
					{/* {JSON.stringify(order)} */}
					<PastOrder>
				<FlexRow>
					<OrderImage
						alt="img"
						src="https://cogoport-testing.sgp1.digitaloceanspaces.com/235e3e0646b3dd17b8c07e7db88f6354/Butter-Paneer-1-4x5-LOW-RES-1110x1065.jpeg"
					/>
					<FlexColumn>
						<FoodName>{order.outletName}</FoodName>
						<OrderDetail>Order ID {order.orderId}</OrderDetail>
						<OrderDetail>Order Date {showOrderTime(order.createdAt)}</OrderDetail>
						<TotalPaid>Total Paid: ₹ {order.totalPayableAmount || 1}</TotalPaid>
						<a>See food details</a>
					</FlexColumn>
				</FlexRow>
			</PastOrder>
				</>
			})}
			
		</Container>
	);
};

export default PastOrders;
