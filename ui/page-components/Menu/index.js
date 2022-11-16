import React, { useState, useEffect } from 'react';
import Header from './Header';
import CardContainer from './CardContainer';
import CartContainer from './CartContainer';

import { useRequest } from '../../helpers/request-helper';

import { Container, FlexRow } from './styles';

const Menu = () => {
	const [selectedFoodItem, setSelectedFoodItem] = useState({});
	const [allFood, setAllFood] = useState([]);
	const [{ loading: foodLoading }, getFood] = useRequest(
		{
			url: '/product/all',
			method: 'GET',
		},
		{ manual: true },
	);

	const listAllFoods = () => {
		getFood()
			.then((response) => {
				console.log('response', response);
				setAllFood(response.data.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		listAllFoods();
	}, []);

	return (
		<Container>
			{/* <Header selectedFoodItem={selectedFoodItem} /> */}
			<FlexRow>
				<CardContainer
					selectedFoodItem={selectedFoodItem}
					setSelectedFoodItem={setSelectedFoodItem}
					allFood={allFood}
				/>
				<CartContainer selectedFoodItem={selectedFoodItem} />
			</FlexRow>
		</Container>
	);
};

export default Menu;
