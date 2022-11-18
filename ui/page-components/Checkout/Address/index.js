import React, { useState, useEffect } from 'react';
import { Container, AddressCard, Title, FullAddress, DeliverHere } from './styles';
import { FlexColumn } from '../../../common/styles';
import { useRequest } from '../../../helpers/request-helper';

const Address = () => {
	const [userAddress, setUserAddress] = useState([]);
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

	return (
		<Container>
			<AddressCard>
				<FlexColumn>
					<Title>Work</Title>
					<FullAddress>
						Cogoport, 6th Floor, Bhim Nagar Road, Kondivita, Mumbai 400047, India
					</FullAddress>
					<DeliverHere>DELIVER HERE</DeliverHere>
				</FlexColumn>
			</AddressCard>
		</Container>
	);
};

export default Address;
