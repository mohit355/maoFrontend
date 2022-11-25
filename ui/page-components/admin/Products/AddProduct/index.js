import React, { useEffect, useState } from 'react';
import { useRequest } from '../../../../helpers/request-helper';
import { useRouter } from 'next/router';
import ProductForm from '../ProductForm';

const AddProduct = () => {
	const router = useRouter();
	const [{ loading: addProductLoading }, addProduct] = useRequest(
		{
			url: '/product/add',
			method: 'POST',
		},
		{ manual: true },
	);

	const onAddProduct = (productDetails) => {
		addProduct({
			data: productDetails,
			headers: {
				'x-access-token': localStorage.getItem('afjalMao-x-access-token'),
			},
		})
			.then((response) => {
				console.log('prduct', response);
				router.push('/admin/products');
			})
			.catch((err) => {});
	};

	return (
		<div>
			<ProductForm onSubmit={onAddProduct} isEdit={false} loading={addProductLoading} />
		</div>
	);
};

export default AddProduct;
