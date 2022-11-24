import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import Link from 'next/link';
import ProductList from './ProductList';
import { Container, Title } from './styles';
import { FlexRow } from '../../../common/styles';
import { FlexContainer } from './ProductList/styles';
import {foodCategoryType} from '../../../common/selectFoodCategory/index';
import { useRequest } from '../../../helpers/request-helper';


const Products = () => {

	const foodTypeOption=[{value:"",label:"All"},{value:'veg',label:"Veg"},{value:'non-veg',label:"Non-veg"}]
	const [searchValue, setSearchValue] = useState('')
	const [selectedFoodCategory, setSelectedFoodCategory] = useState('')
	const [selectedFoodType, setSelectedFoodType] = useState('')
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
			url: `/admin/product/all?productType=${selectedFoodType && selectedFoodType.value || ''}&name=${searchValue}&category=${selectedFoodCategory && selectedFoodCategory.value || ''}`,
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
	}, [searchValue,selectedFoodCategory,selectedFoodType]);


	return (
		<Container>
			<FlexRow className="flex_container">
				<Title>Products</Title>

				<Link className="add_food" href="/admin/products/add">
					Add New Food Item +
				</Link>
			</FlexRow>
			<>
				{allProducts.length!==0 &&
				<FlexContainer>
					<div>
						<input value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} type="text" placeholder="search food name" />
						<Select options={foodCategoryType} isSearchable={true} value={selectedFoodCategory} onChange={setSelectedFoodCategory} className="header-select" />
						<Select options={foodTypeOption} value={selectedFoodType} onChange={setSelectedFoodType} className="header-select" />
					</div>
				</FlexContainer>}
				<ProductList listAllProducts={listAllProducts} allProducts={allProducts} getAllProductsLoading={getAllProductsLoading} />
			</>
		</Container>
	);
};

export default Products;
