import React from 'react';
// import Logo from "../../Logo/Logo";
import NavigationItems from '../NavigationItems';
import Backdrop from '../../shared/BackDrop';
import Aux from '../../hoc/Auxillary/Auxillary';
import { Title } from '../Toolbar/styles';

const SideDrawer = (props) => {
	return (
		<Aux>
			<Backdrop show={props.open} clicked={props.closed} />
			<div
				className={`SideDrawer ${props.open ? 'Open' : 'Close'} `}
				onClick={props.closed}
			>
				<div className="logoMargin">
					{/* <Logo height="70px" /> */}
					<Title>Afzal Mao</Title>
				</div>

				<nav>
					<NavigationItems isAuthenticated={props.isAuth} isSideDrawerOpen={props.open} />
				</nav>
			</div>
		</Aux>
	);
};

export default SideDrawer;
