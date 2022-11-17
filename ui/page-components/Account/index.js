import React, { useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import FastfoodRoundedIcon from '@material-ui/icons/FastfoodRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';

import PastOrders from './PastOrders';
import ManageAddress from './ManageAddress';

import {
	Container,
	Title,
	AccountCard,
	ProfileTabNav,
	ProfileDetail,
	Image,
	ProfileName,
	DetailsView,
	FlexRow,
	Icon,
	PhoneNumber,
} from './styles';

const Account = () => {
	const [tabIndex, setTabIndex] = useState(0);

	const handleTabChange = (event, newTabIndex) => {
		setTabIndex(newTabIndex);
	};
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
						<PhoneNumber>6207994778</PhoneNumber>
					</ProfileDetail>
					<Tabs
						TabIndicatorProps={{ style: { background: '#a87d43' } }}
						orientation="vertical"
						value={tabIndex}
						indicatorColor="primary"
						onChange={handleTabChange}
					>
						<Tab
							label={
								<FlexRow>
									<Icon>
										<FastfoodRoundedIcon />
									</Icon>
									Past Orders
								</FlexRow>
							}
						/>
						<Tab
							label={
								<FlexRow>
									<Icon>
										<HomeRoundedIcon />
									</Icon>
									Addresses
								</FlexRow>
							}
						/>
					</Tabs>
				</ProfileTabNav>

				<DetailsView>
					{tabIndex === 0 && <PastOrders />}
					{tabIndex === 1 && <ManageAddress />}
				</DetailsView>
			</AccountCard>
		</Container>
	);
};

export default Account;
