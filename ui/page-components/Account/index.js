import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import {
	Container,
	Title,
	AccountCard,
	ProfileTabNav,
	ProfileDetail,
	Image,
	ProfileName,
} from './styles';

const TabPanel = (props) => {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
};

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `vertical-tab-${index}`,
		'aria-controls': `vertical-tabpanel-${index}`,
	};
}

const Account = () => {
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
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
					</ProfileDetail>
					<Tabs
						orientation="vertical"
						variant="scrollable"
						value={value}
						onChange={handleChange}
						aria-label="Vertical tabs example"
					>
						<Tab label="Item One" {...a11yProps(0)} />
						<Tab label="Item Two" {...a11yProps(1)} />
						<Tab label="Item Three" {...a11yProps(2)} />
						<Tab label="Item Four" {...a11yProps(3)} />
						<Tab label="Item Five" {...a11yProps(4)} />
						<Tab label="Item Six" {...a11yProps(5)} />
						<Tab label="Item Seven" {...a11yProps(6)} />
					</Tabs>
				</ProfileTabNav>

				<TabPanel value={value} index={0}>
					Item One
				</TabPanel>
				<TabPanel value={value} index={1}>
					Item Two
				</TabPanel>
				<TabPanel value={value} index={2}>
					Item Three
				</TabPanel>
				<TabPanel value={value} index={3}>
					Item Four
				</TabPanel>
				<TabPanel value={value} index={4}>
					Item Five
				</TabPanel>
				<TabPanel value={value} index={5}>
					Item Six
				</TabPanel>
				<TabPanel value={value} index={6}>
					Item Seven
				</TabPanel>
			</AccountCard>
		</Container>
	);
};

export default Account;
