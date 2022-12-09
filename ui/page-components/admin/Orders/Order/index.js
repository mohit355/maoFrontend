import { CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import Select from 'react-select';
import { useRequest } from '../../../../helpers/request-helper';
import CustomerDetails from './CustomerDetails';
import OrderedFoodList from './OrderedFoodList';
import { Container } from './styles';

const Order = ({
	id,
	status,
	suggestion,
	orderedProduct,
	orderId,
	User,
	DeliveryAddress,
	orderTime,
	outletName,
	modeOfPayment,
	totalPayableAmount,
	totalDiscountedAmount
}) => {
	const [{ loading: updateOrderLoading }, updateOrder] = useRequest(
		{
			method: 'POST',
		},
		{ manual: true },
	);
	const [showCustomerDetails, setShowCustomerDetails] = useState(false);
	const [orderStatus, setOrderStatus] = useState(status);
	const [editOrderStatus, setEditOrderStatus] = useState(false);
	const handleViewOrderDetails = () => {
		setShowCustomerDetails((prev) => !prev);
	};

	const orderStatusOption = [
		{ value: 'Order received', label: 'Order Received' },
		{ value: 'Preparing', label: 'Preparing' },
		{ value: 'Out for delivery', label: 'Out for Delivery' },
		{ value: 'Delivered', label: 'Delivered' },
	];

	const handleEditOrderStatus = () => {
		setEditOrderStatus((prev) => !prev);
	};

	const handleOrderStatusChange = (e, id) => {
		const statusValue = e.value;

		updateOrder({
			url: `/order/update/${id}`,
			data: {
				status: statusValue,
			},
			headers: {
				'x-access-token': localStorage.getItem('afjalMao-x-access-token'),
			},
		})
			.then((result) => {
				setOrderStatus(statusValue);
				setEditOrderStatus(false);
			})
			.catch((err) => {});
	};

	const showOrderTime = () => {
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
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					marginBottom: '12px',
				}}
			>
				<div>
					<h3 style={{ marginTop: '0px', marginBottom: '0px' }}>Order #{orderId}</h3>
				</div>
				<div>{showOrderTime(orderTime)}</div>
			</div>
			<div
				style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
			>
				<div >
					<h4>Outlet Name: {outletName}</h4>
					<h4>Mode of Payment: {modeOfPayment}</h4>
				</div>
				<div>
					{!editOrderStatus && (
						<p
							onClick={handleEditOrderStatus}
							style={{ border: '1px solid gray', padding: '6px' }}
						>
							{orderStatus} <EditIcon style={{ height: '16px', cursor: 'pointer' }} />
						</p>
					)}
					{editOrderStatus && (
						<Select
							options={orderStatusOption}
							value={orderStatus}
							onChange={(e) => {
								handleOrderStatusChange(e, id);
							}}
						/>
					)}
				</div>
			</div>
			<hr style={{ color: 'black', width: '100%' }} />
			{suggestion && <div>
				<h4 style={{ display: 'inline' }}>From customer side :</h4> {suggestion}
			</div>}
			<div>
				<h4>Food ordered:</h4>
				<OrderedFoodList totalPayableAmount={totalPayableAmount} totalDiscountedAmount={totalDiscountedAmount} foodItemList={orderedProduct} />
			</div>

			<div>
				<button type="button" onClick={handleViewOrderDetails}>
					{showCustomerDetails ? 'Hide Customer details' : 'View Customer details'}
				</button>
			</div>
			<div>
				{showCustomerDetails && (
					<CustomerDetails User={User} DeliveryAddress={DeliveryAddress} />
				)}
			</div>
		</Container>
	);
};

export default Order;
