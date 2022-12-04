import React from 'react';
// import Logo from "../../Logo/Logo";
// import "./Toolbar.css";
import NavigationItems from '../NavigationItems';
import DrowerToggler from '../SideDrawer/DrawerToggler';
import { Title, Logo } from './styles';

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
			{/* <Title
				alt="logo"
				src="https://cogoport-testing.sgp1.digitaloceanspaces.com/0fcca0eebaa0d849c796c00aef38d049/logo1%20%281%29.png"
			/> */}
			<Logo
				alt="logo"
				src="https://cogoport-testing.sgp1.digitaloceanspaces.com/0fcca0eebaa0d849c796c00aef38d049/logo1%20%281%29.png"
			/>
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
