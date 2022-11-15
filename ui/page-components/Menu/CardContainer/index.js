/* eslint-disable jsx-a11y/alt-text */
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import React, { useState, useEffect } from 'react';
import Modal from '@material-ui/core/Modal';

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
	PopContainer,
	AddButtonTitle,
	Line,
	Customize,
} from './styles';
import VegIcon from '../../../assets/veg-icon.svg';
import NonVegIcon from '../../../assets/non-veg-icon.svg';

import { FlexColumn, FlexRow } from '../../../common/styles';

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

	useEffect(() => {
		localStorage.setItem('checkoutItem', JSON.stringify(selectedFoodItem));
	}, [selectedFoodItem]);

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

	const [showButtonContent, setShowButtonContent] = useState(false);

	const handleOpenAddContent = () => {
		setShowButtonContent(true);
	};

	const handleCloseAddConten = () => {
		setShowButtonContent(false);
	};

	const addButtonContent = (item) => {
		console.log('itemss', selectedFoodItem);
		return (
			<PopContainer>
				<Column>
					<AddButtonTitle>
						<FlexRow>
							{item?.productType === 'veg' ? (
								<VegIcon style={{ marginTop: 'auto', marginRight: '8px' }} />
							) : (
								<NonVegIcon style={{ marginTop: 'auto', marginRight: '8px' }} />
							)}
							{item?.productName}
						</FlexRow>
					</AddButtonTitle>
					<Line />
					<FlexRow>
						<FlexColumn style={{ width: '25%' }}>
							<span style={{ fontWeight: '600' }}>Half</span>
						</FlexColumn>
						<FlexColumn style={{ width: '50%' }}>
							<ButtonGroup style={{ marginLeft: '20px' }}>
								<Button
									onClick={() => {
										handleMinus(item, 'H');
									}}
									className="minusButton"
									disabled={!(selectedFoodItem[item.id]?.full <= 0)}
								>
									{' '}
									<RemoveIcon fontSize="small" />
								</Button>

								<Button
									onClick={() => {
										handlePlus(item, 'H');
									}}
									className="plusButton"
								>
									{' '}
									<AddIcon fontSize="small" />
								</Button>
							</ButtonGroup>
						</FlexColumn>
						<FlexColumn style={{ width: '25%' }}>
							{selectedFoodItem[item.id] && (
								<Count className="modal_count">{selectedFoodItem[item.id]?.half}</Count>
							)}
						</FlexColumn>
					</FlexRow>
					<FlexRow style={{ marginTop: '20px' }}>
						<FlexColumn style={{ width: '25%' }}>
							<span style={{ fontWeight: '600' }}>Full</span>
						</FlexColumn>
						<FlexColumn style={{ width: '50%' }}>
							<ButtonGroup style={{ marginLeft: '20px' }}>
								<Button
									onClick={() => {
										handleMinus(item, 'F');
									}}
									className="minusButton"
									disabled={!(selectedFoodItem[item.id]?.half <= 0)}
								>
									{' '}
									<RemoveIcon fontSize="small" />
								</Button>

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
						</FlexColumn>
						<FlexColumn style={{ width: '25%' }}>
							{selectedFoodItem[item.id] && (
								<Count className="modal_count">{selectedFoodItem[item.id]?.full}</Count>
							)}
						</FlexColumn>
					</FlexRow>
				</Column>
			</PopContainer>
		);
	};

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
								<Price>
									₹
									<>
										{item?.productHalfPrice
											? item?.productHalfPrice
											: item?.productFullPrice}
									</>
								</Price>
								<FlexRow>
									{!selectedFoodItem[item.id] ? (
										<FlexColumn>
											<OrderButton
												onClick={() => {
													return item?.productHalfPrice && item?.productFullPrice
														? handleOpenAddContent()
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
															? handleOpenAddContent()
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
															? handleOpenAddContent()
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
									<Modal
										open={showButtonContent}
										onClose={handleCloseAddConten}
										aria-labelledby="simple-modal-title"
										aria-describedby="simple-modal-description"
									>
										{addButtonContent(item)}
									</Modal>
									<TypeIcon>
										{item?.productType === 'veg' ? <VegIcon /> : <NonVegIcon />}
									</TypeIcon>
								</FlexRow>
							</Column>
						</Row>
					</Card>
				))}
			</CardCont>
		</Container>
	);
};

export default CardContainer;
