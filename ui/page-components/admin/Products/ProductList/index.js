import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import apis from '../../../../apis';
import { useRequest } from '../../../../helpers/request-helper';

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
		getAllProducts()
			.then((response) => {
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
		})
			.then((response) => {
				console.log('response', response);
				listAllProducts();
			})
			.catch((err) => {});
	};

	return (
		<div>
			<Link href="/admin/products/add">Add New Food Item</Link>
			{allProducts.map((product, index) => {
				return (
					<div key={product.id}>
						{JSON.stringify(product.productName)}
						<Link href={`/admin/products/edit/${product.id}`}>Edit</Link>
						<span onClick={() => handleDeleteProduct(product.id)}>Remove</span>
					</div>
				);
			})}
		</div>
	);
};

export default ProductList;
