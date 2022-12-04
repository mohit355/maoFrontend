import React, { useState, useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import { isMobile } from 'react-device-detect';
import Select from 'react-select';
import Header from './Header';
import CardContainer from './CardContainer';
import CartContainer from './CartContainer';
import { useRequest } from '../../helpers/request-helper';
import { Container, Flex } from './styles';
import { FlexRow } from '../../common/styles';
import Input from '../../common/Input';
import { foodCategoryType } from '../../common/selectFoodCategory/index';


const Menu = () => {
	const [selectedFoodItem, setSelectedFoodItem] = useState({});
	const [allFood, setAllFood] = useState([]);
	const foodTypeOption = [
		{ value: '', label: 'All' },
		{ value: 'veg', label: 'Veg' },
		{ value: 'non-veg', label: 'Non-veg' },
	];
	const [searchValue, setSearchValue] = useState('');
	const [selectedFoodCategory, setSelectedFoodCategory] = useState({
		value: '',
		label: 'All',
	});
	const [selectedFoodType, setSelectedFoodType] = useState({ value: '', label: 'All' });
	const [{ loading: foodLoading }, getFood] = useRequest(
		{
			url: '/product/all',
			method: 'GET',
		},
		{ manual: true },
	);

	const listAllFoods = () => {
		getFood({
			url: `/product/all?productType=${
				(selectedFoodType && selectedFoodType.value) || ''
			}&name=${searchValue}&category=${
				(selectedFoodCategory && selectedFoodCategory.value) || ''
			}`,
			headers: {
				'x-access-token': localStorage.getItem('afjalMao-x-access-token'),
			},
		})
			.then((response) => {
				console.log('response', response);
				setAllFood(response.data.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		const selectedFoods=localStorage.getItem("checkoutItem");
		if(selectedFoods){
			setSelectedFoodItem(JSON.parse(selectedFoods));
		}
		listAllFoods();
	}, [searchValue, selectedFoodCategory, selectedFoodType]);

	return (
		<Container>
			<Flex style={{flexDirection:'column'}}>
				<FlexRow
					style={{
						flexDirection: isMobile ? 'column' : 'row',
						margin: '20px 8px 20px 8px',
						justifyContent:'space-between',
						width:'70%'
					}}
				>
					<Input
						prefix={<SearchIcon className="search-icon" />}
						suffix={
							<CloseIcon onClick={() => setSearchValue('')} className="cross-icon" />
						}
						style={{ width: '260px', marginInline: '10px' }}
						onChange={(e) => setSearchValue(e.target.value)}
						value={searchValue}
						placeholder="Search food name"
						type="text"
					/>
					<FlexRow
						style={{
							flexDirection: isMobile ? 'column' : 'row',
							alignItems: 'center',
						}}
					>
						<label className="header-label">Food Category</label>
						<Select
							options={foodCategoryType}
							isSearchable
							value={selectedFoodCategory}
							onChange={setSelectedFoodCategory}
							className="header-select"
						/>
						<label className="header-label">Food Type</label>
						<Select
							options={foodTypeOption}
							value={selectedFoodType}
							onChange={setSelectedFoodType}
							className="header-select"
						/>
					</FlexRow>
				</FlexRow>
				<CardContainer
					selectedFoodItem={selectedFoodItem}
					setSelectedFoodItem={setSelectedFoodItem}
					allFood={allFood}
				/>
				<CartContainer selectedFoodItem={selectedFoodItem} />
			</Flex>
		</Container>
	);
};

export default Menu;
