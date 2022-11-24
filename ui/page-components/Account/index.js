import React, { useContext, useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import FastfoodRoundedIcon from '@material-ui/icons/FastfoodRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import PastOrders from './PastOrders';
import {SessionContext} from "../_app/index"
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
import AdminList from './AdminList';

const Account = () => {
	const [tabIndex, setTabIndex] = useState(0);
	const { userDetails} = useContext(SessionContext);

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
						<ProfileName>{userDetails.name} {userDetails.isAdmin==='1'&& `| Admin`}</ProfileName>
						<PhoneNumber>{userDetails.phoneNumber}</PhoneNumber>
					</ProfileDetail>
					<Tabs
						TabIndicatorProps={{ style: { background: '#a87d43' } }}
						orientation="vertical"
						value={tabIndex}
						indicatorColor="primary"
						onChange={handleTabChange}
					>
						{userDetails.isAdmin==='1' &&
							<Tab
							label={
								<FlexRow>
									<Icon>
										<HomeRoundedIcon />
									</Icon>
									Admin List
								</FlexRow>
							}
						/>
						}
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
					{userDetails.isAdmin==='1' && 
						<>
							{tabIndex === 0 && <AdminList />}
							{tabIndex === 1 && <PastOrders />}
							{tabIndex === 2 && <ManageAddress />}
						</>
					}
					{userDetails.isAdmin==='0' &&
						<>
							{tabIndex === 0 && <PastOrders />}
							{tabIndex === 1 && <ManageAddress />}
						</>
					}
					
				</DetailsView>
			</AccountCard>
		</Container>
	);
};

export default Account;
