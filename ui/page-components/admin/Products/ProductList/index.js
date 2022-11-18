import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import apis from '../../../../apis';
import { useRequest } from '../../../../helpers/request-helper';
import { Container, FlexContainer, FlexListItem } from './styles';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const ProductList = () => {
	const [allProducts, setAllProducts] = useState([]);
	const [{ loading: getAllProductsLoading }, getAllProducts] = useRequest(
		{
			url: '/admin/product/all',
			method: 'GET',
		},
		{ manual: true },
	);

	const [{ loading: deleteLoading }, deleteProduct] = useRequest(
		{
			url: '/product/delete',
			method: 'DELETE',
		},
		{ manual: true },
	);

	const listAllProducts = () => {
		getAllProducts({
			headers:{
				'x-access-token':localStorage.getItem('afjalMao-x-access-token')
			}
		}).then((response) => {
				console.log('response', response);
				setAllProducts(response.data.data);
			})
			.catch((err) => {});
	};

	useEffect(() => {
		listAllProducts();
	}, []);

	const handleDeleteProduct = (productId) => {
		deleteProduct({
			url: `/product/delete/${productId}`,
			headers:{
				'x-access-token':localStorage.getItem('afjalMao-x-access-token')
			}
		})
			.then((response) => {
				console.log('response', response);
				listAllProducts();
			})
			.catch((err) => {});
	};

	return (
		<Container>
			<FlexContainer>
				<div>
					<Link href="/admin/products/add">Add New Food Item</Link>
				</div>
				<div>
					<select>
						<option>Category</option>
					</select>
					<select>
						<option>Type</option>
					</select>
					<input type="text" placeholder='search food name'></input>
				</div>
			<div>
				{allProducts.map((product, index) => {
				return (
					<FlexListItem key={product.id}>

						<div>
							{product.productName}
						</div>
						
						<div>
							<Link href={`/admin/products/edit/${product.id}`}><EditIcon></EditIcon></Link>
							<span className='deleteFoodItem' onClick={() => handleDeleteProduct(product.id)}><DeleteIcon></DeleteIcon></span>
						</div>
					</FlexListItem>
				);
			})}
			</div>
			</FlexContainer>
		</Container>
	);
};

export default ProductList;
