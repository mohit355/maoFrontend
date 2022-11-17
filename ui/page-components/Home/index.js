import React,{useContext} from 'react';
import { SessionContext } from '../_app';

const Home = () => {
	const {userDetails,setUserDetails} =  useContext(SessionContext);
	return <div>Home
	{JSON.stringify(userDetails)}
	</div>;
};

export default Home;
