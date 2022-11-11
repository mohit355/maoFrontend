import React from 'react';

import { Container, Title, AddressContainer, Type, FlexColumn, Address } from './styles';

const ManageAddress = () => {
	return (
		<Container>
			<Title>Manage Addresses</Title>
			<AddressContainer>
				<FlexColumn>
					<Type>Work</Type>
					<Address>4th Floor, Cogoport</Address>
				</FlexColumn>
			</AddressContainer>
		</Container>
	);
};

export default ManageAddress;
