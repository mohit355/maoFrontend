import React, { useState } from 'react'
import NavigationItem from '../NavigationItem'
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Modal from '@material-ui/core/Modal';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import MenuIcon from '@material-ui/icons/MenuBook';

import { ModalContainer, Text } from './styles';



const UserNavItems = ({isSideDrawerOpen}) => {

    const [foodCount, setFoodCount] = useState(0);
	const [openOfferModal, setOpenOfferModal] = useState(false);

    const handleModalOpen = () => {
		setOpenOfferModal(true);
	};
    const handleModalClose = () => {
		setOpenOfferModal(false);
	};

    const offerContent = (
		<ModalContainer>
			<h2 id="simple-modal-title">Offer</h2>
			<p id="simple-modal-description">This is offer Modal</p>
		</ModalContainer>
	);

    return (
        <>
            <NavigationItem link="/menu" exact>
                Menu
            </NavigationItem>
            <NavigationItem link="/menu" exact>
                <Tooltip title="Offers and Discounts" arrow>
					<Button onClick={handleModalOpen}>
						{!isSideDrawerOpen && <LocalOfferIcon style={{ color: '#ffffff' }} />} {' '} {isSideDrawerOpen && <Text>Offers</Text>}
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
            </NavigationItem>
            
            <NavigationItem link="/menu" exact>
                <Tooltip title="Cart" arrow>
				    <Button>
					    <Badge color="secondary" badgeContent={foodCount}>
				        	{!isSideDrawerOpen && <ShoppingCartIcon style={{ color: '#ffffff' }} />}{isSideDrawerOpen && <Text>Cart</Text>}
					    </Badge>
				    </Button>
			    </Tooltip>
            </NavigationItem>
        </>
    )
}

export default UserNavItems