import React from 'react';
import { Container, AddressCard, Title, FullAddress, DeliverHere } from './styles';
import { FlexColumn } from '../../../common/styles';

const Address = () => {
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
