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
import AddressForm from '../../Address/AddressForm';

const Address = ({showSelectedAddress,setShowSelectedAddress, handleModalClose,setAddressModal,addressModal,handleAddAddress,setSelectedAddress,selectedAddress}) => {
	const [userAddress, setUserAddress] = useState([]);
	const {userDetails} =  useContext(SessionContext);

	const handleModalOpen = () => {
		setAddressModal(true);
	};

	const [{ loading: addessLoading }, getAddress] = useRequest(
		{
			url: '/address/getByUserId',
			method: 'GET',
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
		listAddress();
	}

	

	return (
		<Container style={{border:'1px dotted gray', padding:'12px'}} >
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
				<AddNewAddress onClick={handleModalOpen}>ADD NEW ADDRESS</AddNewAddress>
				</div>
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
				<AddressForm onSubmit={handleAddAddress}/>
			</Modal>
		</Container>
	);
};

export default Address;
