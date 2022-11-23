import React from 'react';
import Link from 'next/link';
import DiscountList from './DiscountList';
import { Container, Title } from './styles';
import { FlexRow } from '../../../common/styles';

const Discounts = () => {
	return (
		<Container>
			<FlexRow className="flex_container">
				<Title>Discounts</Title>

				<Link className="add_dicount" href="/admin/discounts/add">
					Add New Discount Coupons
				</Link>
			</FlexRow>
			<DiscountList />
		</Container>
	);
};

export default Discounts;
