import {Modal } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useRequest } from '../../../helpers/request-helper';
import AddressForm from '../../Address/AddressForm';
import ShowMessage from '../../ErrorHandling/showMessage';
import { SessionContext } from '../../_app';

import { Container, Title, AddressContainer, Type, FlexColumn, Address, Addresses, ActionButtons, Icon } from './styles';

const ManageAddress = () => {

	const [userAddress, setUserAddress] = useState([]);
	const [addressModal, setAddressModal] = useState(false);
	const [editableAddress, setEditableAddress] = useState({})
	const {userDetails} =  useContext(SessionContext);
	const [showNotification, setShowNotification] = useState({
		type: 'success',
		open: false,
		msg: '',
	});

	const [{ loading: addessLoading }, getAddress] = useRequest(
		{
			method: 'GET',
		},
		{ manual: true },
	);
	const [{ loading: updateAddessLoading }, updateAddress] = useRequest(
		{
			method: 'POST',
		},
		{ manual: true },
	);
	const [{ loading: deleteAddessLoading }, deleteAddress] = useRequest(
		{
			method: 'DELETE',
		},
		{ manual: true },
	);

	const [{ loading: addAddessLoading }, addAddress] = useRequest(
		{
			url: '/address/add',
			method: 'POST',
		},
		{ manual: true },
	);


	const listAddress = async () => {
		await getAddress({
			url: `/address/getByUserId/${userDetails.id}`,
			headers: {
				'x-access-token': localStorage.getItem('afjalMao-x-access-token'),
			},
		})
			.then((response) => {
				setUserAddress(response.data.data);
			})
			.catch((err) => {
				console.log('err', err);
			});
	};

	const handleModalClose = () => {
		setAddressModal(false);
	};

	useEffect(() => {
		if(userDetails.id){
			listAddress();
		}
	}, [JSON.stringify(userDetails.id)]);

	const handleModalOpen = () => {
		setAddressModal(true);
	};

	const handleUpdateAddress= async (addressDetails)=>{
		await updateAddress({
			url:`/address/update/${editableAddress.id}`,
			headers: {
				'x-access-token': localStorage.getItem('afjalMao-x-access-token'),
			},
			data:addressDetails
		}).then((result)=>{
			handleModalClose();
			setShowNotification({
					type: 'success',
					open: true,
					msg: `Address Updated successfully`,
			});
			listAddress();
		}).catch(err=>{
			console.log(err);
			return false;
		})
	}

	const handleSubmitAddress= async (addressDetails, mode)=>{
		if(mode==='add'){
			await addAddress({
				headers: {
					'x-access-token': localStorage.getItem('afjalMao-x-access-token'),
				},
				data:addressDetails
			}).then((result)=>{
				handleModalClose();
				setShowNotification({
						type: 'success',
						open: true,
						msg: `Address added successfully`,
				});
				listAddress();
			}).catch(err=>{
				console.log(err);
				return false;
			})
		}
		else{
			handleUpdateAddress(addressDetails);
		}
	}

	const handleClose = () => {
		setShowNotification((prev) => {
			return {
				...prev,
				open: false,
			};
		});
	};

	const handleEditAddress=(address)=>{
		setEditableAddress(address);
		handleModalOpen();
	}

	const handleDeleteAddress= async (addressId)=>{
		await deleteAddress({
			url:`/address/delete/${addressId}`,
			headers: {
				'x-access-token': localStorage.getItem('afjalMao-x-access-token'),
			},
		}).then((result)=>{
			setShowNotification({
					type: 'success',
					open: true,
					msg: `Address deleted successfully`,
			});
			listAddress();
		}).catch(err=>{
			console.log(err);
			return false;
		})
	}

	const handleAddAddress=()=>{

		setEditableAddress(null)
		handleModalOpen();
	}


	return (
		<Container>
			<Title>Manage Addresses</Title>
			<Addresses>
				{userAddress.map(address=>{
				return (
					<AddressContainer key={address.id} >
						<FlexColumn>
							<Type>{address.addressType}</Type>
							<Address>
								{`${address.houseNo}, ${address.area} ${address.city}`}
							<br/>
							{`pincode: ${address.pincode}`}
							<br/>
							{`${address.receiverPhoneNumber}`}
							</Address>
						</FlexColumn>
						<ActionButtons>
							<Icon onClick={()=>handleEditAddress(address)} ><EditIcon/></Icon>
							<Icon onClick={()=>handleDeleteAddress(address.id)} ><DeleteIcon/></Icon>
						</ActionButtons>
					</AddressContainer>
				)
			})}
			<AddressContainer onClick={handleAddAddress}  style={{border:'2px solid green',cursor:'pointer'}} >
						<div style={{display:'flex',alignItems:'center', justifyContent:'center',fontWeight:'bolder'}}>
							+ Add new address
						</div>
					</AddressContainer>
			</Addresses>
			<Modal
				open={addressModal}
				onClose={handleModalClose}
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
			>
				<AddressForm onSubmit={handleSubmitAddress} editAddress={editableAddress} />
			</Modal>
			<ShowMessage
				handleClose={handleClose}
				open={showNotification.open}
				type={showNotification.type}
				message={showNotification.msg}
			/>
		</Container>
	);
};

export default ManageAddress;
