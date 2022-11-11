import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import Tooltip from '@material-ui/core/Tooltip';
import Modal from '@material-ui/core/Modal';
import { Container, Title, EndFlex, ModalContainer } from './styles';

const Header = ({ selectedFoodItem }) => {
	let foodCount = 0;
	Object.values(selectedFoodItem).forEach((values) => {
		foodCount += values?.quantity;
	});

	const [showUserPop, setShowUserPop] = useState(null);
	const [openOfferModal, setOpenOfferModal] = useState(false);

	const handlePopClick = (event) => {
		setShowUserPop(event.currentTarget);
	};

	const handlePopClose = () => {
		setShowUserPop(null);
	};

	const handleModalOpen = () => {
		setOpenOfferModal(true);
	};

	const handleModalClose = () => {
		setOpenOfferModal(false);
	};

	const open = Boolean(showUserPop);
	const id = open ? 'simple-popover' : undefined;

	const offerContent = (
		<ModalContainer>
			<h2 id="simple-modal-title">Offer</h2>
			<p id="simple-modal-description">This is offer Modal</p>
		</ModalContainer>
	);

	return (
		<Container>
			<Title>Afzal Mao Special Menu</Title>
			<EndFlex>
				<Tooltip title="Offers and Discounts" arrow>
					<Button onClick={handleModalOpen}>
						<LocalOfferIcon style={{ color: '#ffffff' }} />
					</Button>
				</Tooltip>
				<Modal
					open={openOfferModal}
					onClose={handleModalClose}
					aria-labelledby="simple-modal-title"
					aria-describedby="simple-modal-description"
				>
					{offerContent}
				</Modal>
				<Tooltip title="My Account" arrow>
					<Button onClick={handlePopClick}>
						<AccountCircleIcon style={{ color: '#ffffff' }} />
					</Button>
				</Tooltip>
				<Popover
					id={id}
					open={open}
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
							<ListItemText primary="My Account" />
						</ListItem>
						<ListItem button>
							<ListItemText primary="Sign In" />
						</ListItem>
					</List>
				</Popover>
				<Tooltip title="Cart" arrow>
					<Button>
						<Badge color="secondary" badgeContent={foodCount}>
							<ShoppingCartIcon style={{ color: '#ffffff' }} />{' '}
						</Badge>
					</Button>
				</Tooltip>
			</EndFlex>
		</Container>
	);
};

export default Header;
