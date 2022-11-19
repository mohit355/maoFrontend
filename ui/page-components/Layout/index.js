import React, { useState } from 'react';
import Aux from '../hoc/Auxillary/Auxillary';
import SideDrawer from '../Navigation/SideDrawer/index.js';
import Toolbar from '../Navigation/Toolbar/index';
// import { SessionContext } from '../_app/index';

const Layout = ({ userDetails, setUserDetails, children }) => {
	const [showSideDrawer, setShowSideDrawer] = useState(false);
	// const { userDetails, setUserDetails } = useContext(SessionContext);

	const sideDrawerClosedHandler = () => {
		setShowSideDrawer(false);
	};

	const sideDrawerToggleHandler = () => {
		setShowSideDrawer((prev) => !prev);
	};

	return (
		<Aux>
			<Toolbar
				isAuth={!!userDetails.id}
				isAdmin={userDetails.isAdmin === '1'}
				userDetails={userDetails}
				setUserDetails={setUserDetails}
				drowerToggleClicked={sideDrawerToggleHandler}
			/>
			<SideDrawer
				isAuth={!!userDetails.id}
				isAdmin={userDetails.isAdmin === '1'}
				setUserDetails={setUserDetails}
				open={showSideDrawer}
				closed={sideDrawerClosedHandler}
			/>
			<main className="Content"> {children} </main>
		</Aux>
	);
};

export default Layout;
