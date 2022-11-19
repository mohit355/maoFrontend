import React from 'react';
// import Logo from "../../Logo/Logo";
// import "./Toolbar.css";
import NavigationItems from '../NavigationItems';
import DrowerToggler from '../SideDrawer/DrawerToggler';
import { Title } from './styles';

const Toolbar = ({
	drowerToggleClicked,
	isAuth,
	isAdmin,
	userDetails,
	setUserDetails,
}) => {
	return (
		<header className="Toolbar">
			<DrowerToggler clicked={drowerToggleClicked} />
			{/* <Logo height="50px" /> */}
			<Title>Afzal Mao</Title>
			<nav className="DesktopOnly">
				<NavigationItems
					isAuthenticated={isAuth}
					isAdmin={isAdmin}
					userDetails={userDetails}
					setUserDetails={setUserDetails}
				/>
			</nav>
		</header>
	);
};

export default Toolbar;
