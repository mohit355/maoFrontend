import React, { useEffect } from 'react';
import { Container,Flex,FlexCenter } from './styles';
import DashboardCard from './DashboardCard';
import { useRequest } from '../../../helpers/request-helper';
import { useState } from 'react';

const Dashboard = () => {

	const [dashboardDetails, setDashboardDetails] = useState([])

	const [{loading: dashboardLoading}, getDashboard] = useRequest(
		{
			url: "/dashboard/all",
			method: 'get',
		},
		{ manual: true },
	);

	const getDashboardDetails=()=>{
		getDashboard({
			headers: {
				'x-access-token': localStorage.getItem('afjalMao-x-access-token'),
			}
		}).then((response)=>{
	    	setDashboardDetails(response.data.data)
    }).catch((error)=>{})
	}

	useEffect(() => {
		getDashboardDetails();
	}, [])
	

	return <Container>
		<FlexCenter>
			<h1>Afjal Mao Dashboard</h1>
		</FlexCenter>

		<Flex>
		{dashboardDetails.map(dashboard=>
			<DashboardCard
				redirectUrl={dashboard.url}
				redirectMsg={dashboard.redirectMsg}
				titleMsg={dashboard.title}
				count={dashboard.count}
			/>
		)}	
		</Flex>
	</Container>
};

export default Dashboard;
