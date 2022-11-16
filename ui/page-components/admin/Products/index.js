import React from 'react';
import ProductList from './ProductList';
import AdminPageLayout from '../AdminPageLayout';

const Products = () => {
	return (
		<AdminPageLayout>
			Products
			<ProductList />
		</AdminPageLayout>
	);
};

export default Products;