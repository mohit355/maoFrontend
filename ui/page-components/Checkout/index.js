import React, { useEffect, useState } from 'react';
import Select from 'react-select';

import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import {
	Container,
	Title,
	SubTitle,
	Description,
	Line,
	SubTotal,
	CheckoutContainer,
	AddressContainer,
	Instruction,
	ApplyCoupon,
	ApplyCouponButton,
	FinalCheckout,
	ConfirmOrderButton,
	Text,
} from './styles';
import { FlexColumn, FlexRow } from '../../common/styles';

import VegIcon from '../../assets/veg-icon.svg';
import NonVegIcon from '../../assets/non-veg-icon.svg';

import Address from './Address';

const Checkout = () => {
	const [selectedFoodItem, setSelectedFoodItem] = useState({});
	useEffect(() => {
		const items = JSON.parse(localStorage.getItem('checkoutItem'));
		setSelectedFoodItem(items);
	}, []);

	const outlets = [
		{ value: 'mazgaon', label: 'Mazgaon' },
		{ value: 'crawford', label: 'Crawford' },
		{ value: 'vashi_naka', label: 'Vashi Naka' },
	];

	const renderCart = Object.values(selectedFoodItem).map((values) => {
		return (
			<>
				{values?.half >= 1 && (
					<FlexRow
						style={{
							marginTop: '20px',
							width: '75%',
							marginLeft: 'auto',
							marginRight: 'auto',
						}}
					>
						<FlexColumn style={{ width: '70%' }}>
							<FlexRow>
								{values?.productType === 'veg' ? (
									<VegIcon style={{ marginTop: 'auto', marginRight: '8px' }} />
								) : (
									<NonVegIcon style={{ marginTop: 'auto', marginRight: '8px' }} />
								)}
								{values?.foodName} (Half)
							</FlexRow>
						</FlexColumn>
						<FlexColumn style={{ width: '10%' }}>X {values?.half}</FlexColumn>
						<FlexColumn style={{ width: '25%', textAlign: 'right' }}>
							₹ {values?.halfPrice}
						</FlexColumn>
					</FlexRow>
				)}
				{values?.full >= 1 && (
					<FlexRow
						style={{
							marginTop: '20px',
							width: '75%',
							marginLeft: 'auto',
							marginRight: 'auto',
						}}
					>
						<FlexColumn style={{ width: '70%' }}>
							<FlexRow>
								{values?.productType === 'veg' ? (
									<VegIcon style={{ marginTop: 'auto', marginRight: '8px' }} />
								) : (
									<NonVegIcon style={{ marginTop: 'auto', marginRight: '8px' }} />
								)}
								{values?.foodName} {values?.halfPrice && '(Full)'}
							</FlexRow>
						</FlexColumn>
						<FlexColumn style={{ width: '10%' }}>X {values?.full}</FlexColumn>
						<FlexColumn style={{ width: '25%', textAlign: 'right' }}>
							{' '}
							₹ {values?.fullPrice}
						</FlexColumn>
					</FlexRow>
				)}
			</>
		);
	});

	let foodTotal = 0;
	Object.values(selectedFoodItem).forEach((values) => {
		if (values?.half >= 1) {
			foodTotal += values?.halfPrice * values?.half;
		}
		if (values?.full >= 1) {
			foodTotal += values?.fullPrice * values?.full;
		}
	});

	return (
		<Container>
			<Title>Checkout</Title>
			<FlexColumn>
				<FlexRow>
					<AddressContainer>
						<SubTitle style={{ marginBottom: '40px' }}>Select Address</SubTitle>
						<Address />
					</AddressContainer>
					<CheckoutContainer>
						<SubTitle>Cart Details</SubTitle>
						{Object.keys(selectedFoodItem).length ? (
							<>
								<Description>
									You choose an awesome item, please go ahead to complete your order
								</Description>

								<Instruction placeholder="Any Suggestion or Instruction?" />
								<Line />
								{renderCart}

								<ApplyCoupon>
									<ApplyCouponButton>
										<LocalOfferOutlinedIcon
											style={{ marginTop: 'auto', marginRight: '8px' }}
										/>{' '}
										Apply Coupon
									</ApplyCouponButton>
								</ApplyCoupon>
								<FlexRow
									style={{
										marginTop: '15%',
										width: '75%',
										marginLeft: 'auto',
										marginRight: 'auto',
									}}
								>
									<FlexColumn style={{ width: '50%' }}>
										<SubTotal>Subtotal</SubTotal>
									</FlexColumn>
									<FlexColumn style={{ width: '50%', textAlign: 'right' }}>
										₹ {foodTotal}
									</FlexColumn>
								</FlexRow>
							</>
						) : null}
					</CheckoutContainer>
				</FlexRow>
				<FinalCheckout>
					<FlexRow style={{ alignItems: 'center', justifyContent: 'space-between' }}>
						<FlexRow style={{ alignItems: 'center', justifyContent: 'space-between' }}>
							<Text>Select Outlet</Text>
							<Select options={outlets} />
						</FlexRow>
						<ConfirmOrderButton>CONFIRM ORDER</ConfirmOrderButton>
					</FlexRow>
				</FinalCheckout>
			</FlexColumn>
		</Container>
	);
};

export default Checkout;
