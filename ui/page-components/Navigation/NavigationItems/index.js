import React, { useState } from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AdminNavItems from './AdminNavItems';
import UserNavItems from './UserNavItems';
import NavigationItem from './NavigationItem';
import { Text } from './styles';

const NavigationItems = ({
	isAuthenticated,
	isAdmin,
	isSideDrawerOpen,
	userDetails,
	setUserDetails,
}) => {
	const router = useRouter();
	const [showUserPop, setShowUserPop] = useState(false);
	const handlePopClick = (event) => {
		setShowUserPop(event.currentTarget);
	};

	console.log(userDetails);
	const handlePopClose = () => {
		setShowUserPop(false);
	};

	const handleMyAccountClick = () => {
		if (userDetails && userDetails.id) {
			router.push('/account');
		} else {
			router.push('/auth');
		}
		handlePopClose();
	};

	const handleLogOutClick = () => {
		localStorage.removeItem('afjalMao-x-access-token');
		localStorage.removeItem('afjalMaoTokenExpiry');
		setUserDetails({});
		router.push('/');
		handlePopClose();
	};

	return (
		<ul className="NavigationItems">
			{isAuthenticated && isAdmin && (
				<AdminNavItems isSideDrawerOpen={isSideDrawerOpen} />
			)}
			{!isAdmin && <UserNavItems isSideDrawerOpen={isSideDrawerOpen} />}
			{!isAuthenticated ? (
				<NavigationItem link="/auth">Signin</NavigationItem>
			) : (
				<NavigationItem>
					<Tooltip title="My Account" arrow>
						<Button onClick={handlePopClick}>
							{!isSideDrawerOpen && <AccountCircleIcon style={{ color: '#ffffff' }} />}
							{isSideDrawerOpen && <Text>Profile</Text>}
						</Button>
					</Tooltip>
					<Popover
						id={showUserPop ? 'simple-popover' : undefined}
						open={showUserPop}
						anchorEl={showUserPop}
						onClose={handlePopClose}
						anchorOrigin={{
							vertical: 'bottom',
							horizontal: 'center',
						}}
						transformOrigin={{
							vertical: 'top',
							horizontal: 'center',
						}}
					>
						<List component="nav" aria-label="main mailbox folders">
							<ListItem button>
								<ListItemText onClick={handleMyAccountClick} primary="My Account" />
							</ListItem>
							<ListItem button>
								{isAuthenticated ? (
									<ListItemText onClick={handleLogOutClick} primary="Log out" />
								) : (
									<Link href="/auth">
										<ListItemText primary="Sign In" />
									</Link>
								)}
							</ListItem>
						</List>
					</Popover>
				</NavigationItem>
			)}
		</ul>
	);
};

export default NavigationItems;
