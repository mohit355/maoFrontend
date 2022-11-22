import React, { useState, useEffect, useContext } from 'react';
import Modal from '@material-ui/core/Modal';
import {
	Container,
	AddressCard,
	Title,
	FullAddress,
	DeliverHere,
	AddNewAddress,
	ModalContainer,
	Form,
	AddButton,
} from './styles';
import { FlexColumn } from '../../../common/styles';
import { useRequest } from '../../../helpers/request-helper';
import { SessionContext } from '../../_app';
import { SubTitle } from '../styles';
import CheckIcon from '@material-ui/icons/VerifiedUserSharp';

const Address = ({setSelectedAddress,selectedAddress}) => {
	const [userAddress, setUserAddress] = useState([]);
	const [addressModal, setAddressModal] = useState(false);
	const [showSelectedAddress, setShowSelectedAddress] = useState(false);
	const {userDetails} =  useContext(SessionContext);

	const handleModalOpen = () => {
		setAddressModal(true);
	};

	const handleModalClose = () => {
		setAddressModal(false);
	};

	const [{ loading: addessLoading }, getAddress] = useRequest(
		{
			url: '/address/getByUserId',
			method: 'GET',
		},
		{ manual: true },
	);

	const listAddress = () => {
		getAddress({
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

	useEffect(() => {
		if(userDetails.id){
			listAddress();
		}
	}, [JSON.stringify(userDetails.id)]);

	const handleSelectedAddress=(address)=>{
		setSelectedAddress(address);
		setShowSelectedAddress(true);
	}

	const handleChangeAddress=()=>{
		setShowSelectedAddress(false);
		setSelectedAddress('')
	}

	const modalContent = (
		<ModalContainer>
			<h2 id="simple-modal-title">Add New Address</h2>
			<Form>
				<label htmlFor="address">Flat No, Street, Locality...</label>
				<input
					required
					id="address"
					name="address"
					label="Flat No, Street, Locality..."
					placeholder="Flat No, Street, Locality..."
				/>
				<label htmlFor="pincode">Pincode</label>
				<input
					required
					id="pincode"
					name="pincode"
					label="Pincode"
					placeholder="Pincode"
				/>

				<AddButton> Add +</AddButton>
			</Form>
		</ModalContainer>
	);

	return (
		<Container>
			{selectedAddress ? <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}} >
				<SubTitle style={{ marginBottom: '40px' }}>Delivery Address  <CheckIcon  style={{color:'green'}} /> </SubTitle>
				<div style={{cursor:'pointer',color:'red'}} onClick={handleChangeAddress} >
					CHANGE
				</div>
			</div>:<SubTitle style={{ marginBottom: '40px' }}>Select Address</SubTitle>}
			{!showSelectedAddress && <div>
				{
					userAddress.map(address=>{
						return <AddressCard>
					<FlexColumn>
						<Title>{address.addressType}</Title>
						<FullAddress>
							{`${address.houseNo}, ${address.area} ${address.city}`}
							<br/>
							{`pincode: ${address.pincode}`}
							<br/>
							{`${address.receiverPhoneNumber}`}
						</FullAddress>
						<DeliverHere onClick={()=>handleSelectedAddress(address)} >
							DELIVER HERE
						</DeliverHere>
					</FlexColumn>
				</AddressCard>
				})
				}
				<AddNewAddress onClick={handleModalOpen}>Add New Address</AddNewAddress>
				</div>
			}
			{userAddress.length===0 && !showSelectedAddress && 
				<AddNewAddress onClick={handleModalOpen}>Add New Address</AddNewAddress>
			}

			{
				showSelectedAddress && <AddressCard style={{border:'1px solid green'}}  >
					<FlexColumn>
						<Title>{selectedAddress.addressType}</Title>
						<FullAddress>
							{`${selectedAddress.houseNo}, ${selectedAddress.area} ${selectedAddress.city}`}
							<br/>
							{`pincode: ${selectedAddress.pincode}`}
							<br/>
							{`${selectedAddress.receiverPhoneNumber}`}
						</FullAddress>
					</FlexColumn>
				</AddressCard>
			}
			<Modal
				open={addressModal}
				onClose={handleModalClose}
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
			>
				{modalContent}
			</Modal>
		</Container>
	);
};

export default Address;
