import { CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import { useRequest } from '../../../../helpers/request-helper';
import CustomerDetails from './CustomerDetails';
import OrderedFoodList from './OrderedFoodList';

const Order = ({
	id,
	status,
	suggestion,
	orderedProduct,
	orderId,
	User,
	DeliveryAddress,
	orderTime
}) => {

	const [{ loading: updateOrderLoading }, updateOrder] = useRequest(
		{
			method: 'POST',
		},
		{ manual: true },
	);
	const [showCustomerDetails, setShowCustomerDetails] = useState(false);
	const [orderStatus, setOrderStatus] = useState(status)
	const [editOrderStatus, setEditOrderStatus] = useState(false)
	const handleViewOrderDetails = () => {
		setShowCustomerDetails(prev=>!prev)
	};


	const handleEditOrderStatus=()=>{
		setEditOrderStatus(prev=>!prev)
	}

	const handleOrderStatusChange=(e,id)=>{
		const statusValue=e.target.value;

		updateOrder({
			url: `/order/update/${id}`,
			data:{
				status:statusValue
			},
			headers: {
				'x-access-token': localStorage.getItem('afjalMao-x-access-token'),
			},
		}).then((result)=>{
			setOrderStatus(statusValue);
			setEditOrderStatus(false);
		}).catch(err=>{})
	}


	const showOrderTime=()=>{
		const dateObj=new Date(orderTime);
		const date=dateObj.getUTCDate();
		const month=dateObj.getUTCMonth();
		const year=dateObj.getUTCFullYear();
		const hour=dateObj.getUTCHours();
		const minutes=dateObj.getUTCMinutes();
		return <span>{`${date}-${month}-${year}, ${(hour%12)<10?'0'+(hour%12):(hour%12)}:${minutes<10?'0'+minutes:minutes} ${hour<12?'AM':'PM'}`}</span>
	}

	return (
		<div style={{display:"flex",border:'1px solid black',marginBottom:"12px", padding:'12px',width:"80vw",flexDirection:'column'}} >
				<div  style={{display:"flex",alignItems:'center',justifyContent:'space-between',marginBottom:'12px'}}>
					<div>
						<h3 style={{marginTop:'0px',marginBottom:'0px'}} >Order #{orderId}</h3>
					</div>
					<div>
						{showOrderTime(orderTime)}
					</div>	
				</div>
				<div  style={{display:"flex",alignItems:'center',justifyContent:'space-between'}}>
					<div>
					</div>
					<div>
						{!editOrderStatus && <p onClick={handleEditOrderStatus} style={{border:'1px solid gray',padding:'6px'}} >{orderStatus} <EditIcon style={{height:'16px',cursor:'pointer'}} /></p> }
						{editOrderStatus && <select value={orderStatus} onChange={(e)=>{handleOrderStatusChange(e,id)}} >
							<option value='Order received' >Order received</option>
							<option value='Preparing'>Preparing</option>
							<option value='Out for delivery'>Out for delivery</option>
							<option value='Delivered'>Delivered</option>
						</select>}
						{/* {updateOrderLoading && <CircularProgress /> } */}
					</div>
				</div>
				<hr style={{color:'black',width:'100%'}} />
				<div>
					<h4 style={{display:'inline'}} >From customer side :</h4> {suggestion}
				</div>
				<div>
					<h4>Food ordered:</h4>
					<OrderedFoodList foodItemList={orderedProduct}/>
				</div>
				
				<div>
					<button type="button" onClick={handleViewOrderDetails}>
						{showCustomerDetails ?'Hide Customer details':'View Customer details'}
					</button>
				</div>
			<div>
				{showCustomerDetails && <CustomerDetails  User={User} DeliveryAddress={DeliveryAddress}/> }
			</div>
		</div>
	);
};

export default Order;
