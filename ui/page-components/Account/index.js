import React from 'react';

import {
	Container,
	Title,
	AccountCard,
	ProfileTabNav,
	ProfileDetail,
	Image,
	ProfileName,
} from './styles';

const Account = () => {
	return (
		<Container>
			<Title>My Account</Title>
			<AccountCard>
				<ProfileTabNav>
					<ProfileDetail>
						<Image
							alt="img"
							src="https://cogoport-testing.sgp1.digitaloceanspaces.com/235e3e0646b3dd17b8c07e7db88f6354/Butter-Paneer-1-4x5-LOW-RES-1110x1065.jpeg"
						/>
						<ProfileName>Ankit Kaushal</ProfileName>
					</ProfileDetail>
				</ProfileTabNav>
			</AccountCard>
		</Container>
	);
};

export default Account;
