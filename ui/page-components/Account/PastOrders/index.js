import React from 'react';

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
	return (
		<Container>
			<Title>Past Orders</Title>
			<PastOrder>
				<FlexRow>
					<OrderImage
						alt="img"
						src="https://cogoport-testing.sgp1.digitaloceanspaces.com/235e3e0646b3dd17b8c07e7db88f6354/Butter-Paneer-1-4x5-LOW-RES-1110x1065.jpeg"
					/>
					<FlexColumn>
						<FoodName>Paneer</FoodName>
						<OrderDetail>Order ID #124343</OrderDetail>
						<OrderDetail>Order Date 12th Oct 2022</OrderDetail>
						<TotalPaid>Total Paid: ₹ 200</TotalPaid>
					</FlexColumn>
				</FlexRow>
			</PastOrder>
		</Container>
	);
};

export default PastOrders;
