import React, { useState, useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import { isMobile } from 'react-device-detect';
import Select from 'react-select';
import Header from './Header';
import CardContainer from './CardContainer';
import CartContainer from './CartContainer';
import { useRequest } from '../../helpers/request-helper';
import { Container, Flex, EmptyContainer } from './styles';
import { FlexRow } from '../../common/styles';
import Input from '../../common/Input';
import { foodCategoryType } from '../../common/selectFoodCategory/index';
import { outlets } from '../../common/SelectOutlets';
import EmptyCart from './CartContainer/EmptyCart';


const Menu = () => {
	const [selectedFoodItem, setSelectedFoodItem] = useState({});
	const [allFood, setAllFood] = useState([]);
	const foodTypeOption = [
		{ value: '', label: 'Veg + Non-veg' },
		{ value: 'veg', label: 'Veg' },
		{ value: 'non-veg', label: 'Non-veg' },
	];
	const [searchValue, setSearchValue] = useState('');
	const [selectedFoodCategory, setSelectedFoodCategory] = useState({
		value: '',
		label: 'All Food Category',
	});
	const [selectedOutletName, setSelectedOutletName] = useState({
		value: '',
		label: 'All Outlets',
	});

	const [selectedFoodType, setSelectedFoodType] = useState({ value: '', label: 'Veg + Non-veg' });

	const [{ loading: foodLoading }, getFood] = useRequest(
		{
			url: '/product/all',
			method: 'GET',
		},
		{ manual: true },
	);

	const listAllFoods = () => {
		getFood({
			url: `/product/all?productType=${(selectedFoodType && selectedFoodType.value) || ''
				}&name=${searchValue}&category=${(selectedFoodCategory && selectedFoodCategory.value) || ''
				}&outletName=${selectedOutletName && selectedOutletName.value}`,
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
		const selectedFoods = localStorage.getItem("checkoutItem");
		console.log(selectedFoods, Object.keys(allFood).length, "jelle");
		if (selectedFoods && Object.keys(allFood).length > 0) {
			setSelectedFoodItem(JSON.parse(selectedFoods));
		}
		else {
			localStorage.removeItem("checkoutItem");
			setSelectedFoodItem({});
		}
		listAllFoods();
	}, [searchValue, selectedFoodCategory, selectedFoodType, selectedOutletName]);

	return (
		<Container>
			<Flex style={{ flexDirection: 'column' }}>
				<FlexRow
					style={{
						flexDirection: isMobile ? 'column' : 'row',
						margin: '20px 8px 20px 8px',
						justifyContent: 'space-between',
						alignItems: 'center',
						width: Object.keys(allFood).length > 0 ? "70%" : '100%',
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
						<Select
							onChange={setSelectedOutletName}
							value={selectedOutletName}
							options={outlets}
							className="selectBox"
						/>
						<Select
							options={foodCategoryType}
							isSearchable
							value={selectedFoodCategory}
							onChange={setSelectedFoodCategory}
							className="selectBox"
						/>
						{/* <label className="header-label">Food Type</label> */}
						<Select
							options={foodTypeOption}
							value={selectedFoodType}
							onChange={setSelectedFoodType}
							className="selectBox"
						/>
					</FlexRow>
				</FlexRow>
				{Object.keys(allFood).length > 0 &&
					<>
						<CardContainer
							selectedFoodItem={selectedFoodItem}
							setSelectedFoodItem={setSelectedFoodItem}
							allFood={allFood}
						/>
						<CartContainer selectedFoodItem={selectedFoodItem} />
					</>
				}
				{Object.keys(allFood).length <= 0 &&
					<EmptyContainer>
						<EmptyCart height="35%" width="35%" />
						<h1>No Food Menu, Check back later</h1>
					</EmptyContainer>
				}
			</Flex>
		</Container>
	);
};

export default Menu;
