import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import Link from 'next/link';
import { isMobile } from 'react-device-detect';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import ProductList from './ProductList';
import { Container, Title } from './styles';
import { FlexRow } from '../../../common/styles';
import { FlexContainer } from './ProductList/styles';
import { foodCategoryType } from '../../../common/selectFoodCategory/index';
import { useRequest } from '../../../helpers/request-helper';
import Input from '../../../common/Input';

const Products = () => {
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
	const [allProducts, setAllProducts] = useState([]);

	const [{ loading: getAllProductsLoading }, getAllProducts] = useRequest(
		{
			url: '/admin/product/all',
			method: 'GET',
		},
		{ manual: true },
	);

	const listAllProducts = () => {
		getAllProducts({
			url: `/admin/product/all?productType=${
				(selectedFoodType && selectedFoodType.value) || ''
			}&name=${searchValue}&category=${
				(selectedFoodCategory && selectedFoodCategory.value) || ''
			}`,
			headers: {
				'x-access-token': localStorage.getItem('afjalMao-x-access-token'),
			},
		})
			.then((response) => {
				setAllProducts(response.data.data);
			})
			.catch((err) => {});
	};

	useEffect(() => {
		listAllProducts();
	}, [searchValue, selectedFoodCategory, selectedFoodType]);

	return (
		<Container>
			<FlexRow className="flex_container">
				<Title>Products</Title>

				<Link className="add_food" href="/admin/products/add">
					Add New Food Item +
				</Link>
			</FlexRow>
			<>
				<FlexRow
					style={{
						flexDirection: isMobile ? 'column' : 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
						margin: '20px 8px 20px 8px',
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
				<ProductList
					listAllProducts={listAllProducts}
					allProducts={allProducts}
					getAllProductsLoading={getAllProductsLoading}
				/>
			</>
		</Container>
	);
};

export default Products;
