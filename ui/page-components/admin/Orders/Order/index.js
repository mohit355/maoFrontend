import React from 'react';

const Order = ({
	id,
	status,
	suggestion,
	orderedProduct,
	orderId,
	User,
	DeliveryAddress,
}) => {
	const handleViewOrderDetails = () => {};

	return (
		<div>
			<div>
				<div>Order ID and change order status button</div>
				{id}
				{orderId}
				{status}
				<div>Suggestion by customer</div>
				{suggestion}
				<div>Food Details and total amount</div>
				{JSON.stringify(orderedProduct)}
				<button type="button" onClick={handleViewOrderDetails}>
					View Customer details
				</button>
				{User && User.name}
				{DeliveryAddress.pincode}
			</div>
		</div>
	);
};

export default Order;
