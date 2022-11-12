/* eslint-disable jsx-a11y/alt-text */
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import React, { useState } from 'react';
import Popover from '@material-ui/core/Popover';

import {
	Container,
	CardCont,
	Card,
	Title,
	Image,
	Row,
	Column,
	ItemName,
	ItemDescription,
	Price,
	Count,
	TypeIcon,
	OrderButton,
} from './styles';
import VegIcon from '../../../assets/veg-icon.svg';
import NonVegIcon from '../../../assets/non-veg-icon.svg';

import { FlexRow } from '../../../common/styles';

const CardContainer = ({ selectedFoodItem, setSelectedFoodItem, allFood }) => {
	const handlePlus = (item, quantityTypes) => {
		const foodItems = { ...selectedFoodItem };

		if (foodItems[item.id]) {
			const foodItem = foodItems[item.id];
			foodItem.quantity += 1;
			if (quantityTypes === 'F') {
				foodItem.full += 1;
			} else {
				foodItem.half += 1;
			}

			setSelectedFoodItem((prev) => {
				return {
					...prev,
					[item.id]: foodItem,
				};
			});
		} else {
			setSelectedFoodItem((prev) => {
				return {
					...prev,
					[item.id]: {
						quantity: 1,
						foodName: item.productName,
						half: quantityTypes === 'H' ? 1 : 0,
						full: quantityTypes === 'F' ? 1 : 0,
						halfPrice: item.productHalfPrice,
						fullPrice: item.productFullPrice,
						productType: item.productType,
					},
				};
			});
		}
	};

	const handleMinus = (item, quantityTypes) => {
		const foodItems = { ...selectedFoodItem };

		let foodItem = foodItems[item.id];
		foodItem.quantity -= 1;
		if (quantityTypes === 'F') {
			foodItem.full -= 1;
		} else {
			foodItem.half -= 1;
		}

		if (foodItem.quantity === 0) {
			foodItem = undefined;
		}

		setSelectedFoodItem((prev) => {
			return {
				...prev,
				[item.id]: foodItem,
			};
		});
	};

	const [showAddPop, setShowAddPop] = useState(null);

	const handleOpenPopover = (event) => {
		setShowAddPop(event.currentTarget);
	};

	const handleClosePopover = () => {
		setShowAddPop(null);
	};

	const open = Boolean(showAddPop);
	const id = open ? 'simple-popover' : undefined;

	return (
		<Container>
			<Title>Paneer</Title>
			<CardCont>
				{(allFood || []).map((item) => (
					<Card>
						<Row>
							<Image alt="img" src={item?.productImage} />
							<Column>
								<ItemName>{item?.productName}</ItemName>
								<ItemDescription>{item?.productDesc}</ItemDescription>
								<Price>₹ {item?.productHalfPrice}</Price>
								<FlexRow>
									{!selectedFoodItem[item.id] ? (
										<>
											{item?.productFullPrice && item?.productFullPrice ? (
												<OrderButton onClick={handleOpenPopover}>Add</OrderButton>
											) : (
												<OrderButton
													onClick={() => {
														handlePlus(item, 'F');
													}}
												>
													Add
												</OrderButton>
											)}
										</>
									) : (
										<ButtonGroup>
											<Button
												onClick={() => {
													handleMinus(item, 'F');
												}}
												className="minusButton"
											>
												{' '}
												<RemoveIcon fontSize="small" />
											</Button>
											<Count className="count">
												{selectedFoodItem[item.id].quantity}
											</Count>
											<Button
												onClick={() => {
													handlePlus(item, 'F');
												}}
												className="plusButton"
											>
												{' '}
												<AddIcon fontSize="small" />
											</Button>
										</ButtonGroup>
									)}
									<Popover
										id={id}
										open={open}
										anchorEl={showAddPop}
										onClose={handleClosePopover}
										anchorOrigin={{
											vertical: 'bottom',
											horizontal: 'center',
										}}
										transformOrigin={{
											vertical: 'top',
											horizontal: 'center',
										}}
									>
										Hello
									</Popover>
									<TypeIcon>
										{item?.productType === 'Veg' ? <VegIcon /> : <NonVegIcon />}
									</TypeIcon>
								</FlexRow>
							</Column>
						</Row>
					</Card>
				))}
			</CardCont>
			{JSON.stringify(selectedFoodItem)}
		</Container>
	);
};

export default CardContainer;
