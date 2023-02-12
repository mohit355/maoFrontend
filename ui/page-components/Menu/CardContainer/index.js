/* eslint-disable jsx-a11y/alt-text */
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import React, { useState, useEffect } from 'react';
import Modal from '@material-ui/core/Modal';
import AddButtonContent from './AddButtonContent';

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
	Customize,
} from './styles';
import VegIcon from '../../../assets/veg-icon.svg';
import NonVegIcon from '../../../assets/non-veg-icon.svg';

import { FlexColumn, FlexRow } from '../../../common/styles';

const CardContainer = ({ selectedFoodItem, setSelectedFoodItem, allFood }) => {
	const [addFood, setAddFood] = useState(null);

	const handlePlus =async  (item, quantityTypes) => {
		let foodItems = { ...selectedFoodItem };

		if (foodItems[item.id]) {
			const foodItem = foodItems[item.id];
			foodItem.quantity += 1;
			if (quantityTypes === 'F') {
				foodItem.full += 1;
			} else {
				foodItem.half += 1;
			}
			foodItems={...foodItems,[item.id]: foodItem}
			setSelectedFoodItem((prev) => {
				return {
					...prev,
					[item.id]: foodItem,
				};
			});
		} else {
			const foodDetails={
				quantity: 1,
				foodName: item.productName,
				half: quantityTypes === 'H' ? 1 : 0,
				full: quantityTypes === 'F' ? 1 : 0,
				halfPrice: item.productHalfPrice,
				fullPrice: item.productFullPrice,
				productType: item.productType,
			}
			foodItems={...foodItems,[item.id]: foodDetails}
			setSelectedFoodItem((prev) => {
				return {
					...prev,
					[item.id]: foodDetails,
				};
			});
		}
		await localStorage.setItem('checkoutItem', JSON.stringify(foodItems));
	};

	// useEffect(() => {
	// 	localStorage.setItem('checkoutItem', JSON.stringify(selectedFoodItem));
	// }, [selectedFoodItem]);

	const handleMinus = (item, quantityTypes) => {
		let foodItems = { ...selectedFoodItem };

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

		foodItems={...foodItems,[item.id]: foodItem,}
		localStorage.setItem('checkoutItem', JSON.stringify(foodItems));
		setSelectedFoodItem((prev) => {
			return {
				...prev,
				[item.id]: foodItem,
			};
		});
	};

	const [showButtonContent, setShowButtonContent] = useState(false);

	const handleOpenAddContent = (item) => {
		setShowButtonContent(true);
		setAddFood(item);
	};

	const handleCloseAddContent = () => {
		setShowButtonContent(false);
	};

	return (
		<Container>
			{(Object.keys(allFood) || []).map((categoryName) => (
				<>
					<Title>{categoryName}</Title>
					<CardCont>
					{allFood[categoryName].map(item=>(
						<Card>
						<Row>
							<Image alt="img" src={item?.productImage} />
							<Column>
								<ItemName>{item?.productName}</ItemName>
								<ItemDescription>{item?.productDesc}</ItemDescription>
								<Price>
									₹
									<>
										{item?.productHalfPrice
											? item?.productHalfPrice
											: item?.productFullPrice}
									</>
								</Price>
								<FlexRow style={{ justifyContent: 'space-between' }}>
									{!selectedFoodItem[item.id] ? (
										<FlexColumn>
											<OrderButton
												onClick={() => {
													return item?.productHalfPrice && item?.productFullPrice
														? handleOpenAddContent(item)
														: handlePlus(item, 'F');
												}}
											>
												Add
											</OrderButton>
											{item?.productHalfPrice && item?.productFullPrice && (
												<Customize>Customisable</Customize>
											)}
										</FlexColumn>
									) : (
										<FlexColumn>
											<ButtonGroup>
												<Button
													onClick={() => {
														return item?.productHalfPrice && item?.productFullPrice
															? handleOpenAddContent(item)
															: handleMinus(item, 'F');
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
														return item?.productHalfPrice && item?.productFullPrice
															? handleOpenAddContent(item)
															: handlePlus(item, 'F');
													}}
													className="plusButton"
												>
													{' '}
													<AddIcon fontSize="small" />
												</Button>
											</ButtonGroup>
											{item?.productHalfPrice && item?.productFullPrice && (
												<Customize>Customisable</Customize>
											)}
										</FlexColumn>
									)}

									<TypeIcon>
										{item?.productType === 'veg' ? <VegIcon /> : <NonVegIcon />}
									</TypeIcon>
								</FlexRow>
							</Column>
						</Row>
				</Card>
					))}
				
				
			</CardCont>
				</>
					
			))}
			<Modal
				open={showButtonContent}
				onClose={handleCloseAddContent}
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
			>
				<AddButtonContent
					item={addFood}
					selectedFoodItem={selectedFoodItem}
					handlePlus={handlePlus}
					handleMinus={handleMinus}
				/>
			</Modal>
		</Container>
	);
};

export default CardContainer;
