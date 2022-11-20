import React from 'react';
import Link from 'next/link';
import ProductList from './ProductList';
import { Container, Title } from './styles';
import { FlexRow } from '../../../common/styles';

const Products = () => {
	return (
		<Container>
			<FlexRow style={{ justifyContent: 'space-between', marginTop: '20px' }}>
				<Title>Products</Title>

				<Link className="add_food" href="/admin/products/add">
					Add New Food Item +
				</Link>
			</FlexRow>
			<ProductList />
		</Container>
	);
};

export default Products;
