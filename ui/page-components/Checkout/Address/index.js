import React, { useState, useEffect } from 'react';
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

const Address = () => {
	const [userAddress, setUserAddress] = useState([]);
	const [addressModal, setAddressModal] = useState(false);

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
			url: `/address/getByUserId/20098d93-b05f-42a8-9fab-902ce7304756`,
		})
			.then((response) => {
				console.log('address', response);
				setUserAddress(response.data.data);
			})
			.catch((err) => {
				console.log('err', err);
			});
	};

	useEffect(() => {
		listAddress();
	}, []);

	console.log('userAddress', userAddress);

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
			<AddressCard>
				<FlexColumn>
					<Title>Work</Title>
					<FullAddress>
						Cogoport, 6th Floor, Bhim Nagar Road, Kondivita, Mumbai 400047, India
					</FullAddress>
					<DeliverHere>
						{' '}
						<input type="radio" name="radio" />
						DELIVER HERE
					</DeliverHere>
				</FlexColumn>
			</AddressCard>
			<AddNewAddress onClick={handleModalOpen}>Add New Address</AddNewAddress>
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
