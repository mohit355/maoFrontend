import React, { useEffect, useState } from 'react';
import { useRequest } from '../../helpers/request-helper';
import { ModalContainer, Text, OfferContainer, Info } from './styles';
import { FlexColumn } from '../../common/styles';

const DiscountsPage = () => {
	const [{ loading: discountLoading }, getDiscountApi] = useRequest(
		{
			url: '/discount/all',
			method: 'GET',
		},
		{ manual: true },
	);

	const [discountList, setDiscountList] = useState([]);

	const getAllDiscounts = async () => {
		await getDiscountApi()
			.then((result) => {
				setDiscountList(result.data.data);
			})
			.catch((err) => {});
	};

	useEffect(() => {
		getAllDiscounts();
	}, []);

	return (
		<ModalContainer>
			<h2 id="simple-modal-title">Offers and Discounts</h2>
			<FlexColumn>
				{(discountList || []).map((item) => (
					<OfferContainer>
						<Text>
							{item.discountType === 'Flat/Absolute' && 'Rs '}
							{item.discountValue ? `${item.discountValue} ` : '____'}
							{item.discountType === 'Percentage' && '%'} off on order above{' '}
							{item.discountOnOrderAbove ? item.discountOnOrderAbove : '____'}
						</Text>
					</OfferContainer>
				))}
			</FlexColumn>
			<Info># Applicable offer/discount will be applied on Checkout</Info>
		</ModalContainer>
	);
};

export default DiscountsPage;
