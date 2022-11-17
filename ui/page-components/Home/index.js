import React,{useContext} from 'react';
import { SessionContext } from '../_app';

const Home = () => {
	const value =  useContext(SessionContext);
	return <div>Home
	{JSON.stringify(value)}
	</div>;
};

export default Home;
