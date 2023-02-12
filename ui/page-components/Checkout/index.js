import React, { useContext, useEffect, useState } from 'react';
import Select from 'react-select';
import Snackbar from '@mui/material/Snackbar';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import { Alert } from '@mui/material';
import { useRouter } from 'next/router';
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
import Address from './Address';
import FoodDetails from './FoodDetails';
import { useRequest } from '../../helpers/request-helper';
import { outlets } from '../../common/SelectOutlets';
import { SessionContext } from '../_app';

const Checkout = () => {
	const [showNotification, setShowNotification] = useState({
		type: 'success',
		open: false,
		msg: '',
	});
	const [addressModal, setAddressModal] = useState(false);
	const [selectedFoodItem, setSelectedFoodItem] = useState({});
	const [selectedAddress, setSelectedAddress] = useState(null);
	const [selectedOutlet, setSelectedOutlet] = useState(null);
	const [showSelectedAddress, setShowSelectedAddress] = useState(false);
	const [discountAppliedDetails, setDiscountAppliedDetails] = useState(0);
	const [foodTotal, setFoodTotal] = useState(0);
	const [suggestion, setSuggestion] = useState('');
	const { userDetails, setUserDetails } = useContext(SessionContext);
	const router = useRouter();
	useEffect(() => {
		const items = JSON.parse(localStorage.getItem('checkoutItem'));
		setSelectedFoodItem(items);
	}, []);

	const [{ loading: placeOrderLoading }, placeOrderApi] = useRequest(
		{
			url: '/order/add',
			method: 'POST',
		},
		{ manual: true },
	);

	const [{ loading: addAddessLoading }, addAddress] = useRequest(
		{
			url: '/address/add',
			method: 'POST',
		},
		{ manual: true },
	);

	const [{ loading: loadingDiscount }, applicableDiscountApi] = useRequest(
		{
			url: '/discount/discountByOrderPrice',
			method: 'POST',
		},
		{ manual: true },
	);

	const getApplicableDiscount = async () => {
		const payload = { priceRange: foodTotal };
		await applicableDiscountApi({
			data: payload,
			headers: {
				'x-access-token': localStorage.getItem('afjalMao-x-access-token'),
			},
		})
			.then((result) => {
				console.log('RESULT ', result);
				const dis = result.data.data;
				setDiscountAppliedDetails(dis);
			})
			.catch((err) => {
				console.log('R ', err);
			});
	};

	useEffect(() => {
		if (discountAppliedDetails.totalDiscountAmount) {
			setFoodTotal(foodTotal - discountAppliedDetails.totalDiscountAmount);
		}
	}, [discountAppliedDetails.totalDiscountAmount]);

	useEffect(() => {
		let totalPrice = 0;
		(Object.values(selectedFoodItem|| {})|| []).forEach((values) => {
			if (values?.half >= 1) {
				totalPrice += values?.halfPrice * values?.half;
			}
			if (values?.full >= 1) {
				totalPrice += values?.fullPrice * values?.full;
			}
		});
		setFoodTotal(totalPrice);
	}, [selectedFoodItem]);

	useEffect(() => {
		if (foodTotal && !discountAppliedDetails) {
			getApplicableDiscount();
		}
	}, [foodTotal]);

	const handleClose = (event, reason) => {
		// if (reason === 'clickaway') {
		// return;
		// }
		setShowNotification((prev) => {
			return {
				...prev,
				open: false,
			};
		});
	};

	const placeOrder = () => {
		if (!selectedAddress) {
			setShowNotification({
				type: 'error',
				open: true,
				msg: 'Please select delivery address',
			});
			return;
		}

		if (!selectedOutlet) {
			setShowNotification({
				type: 'error',
				open: true,
				msg: 'Please select the mao outlet',
			});
			return;
		}

		const payload = {
			product: selectedFoodItem,
			addressId: selectedAddress.id,
			modeOfPayment: 'Cash on Delivery',
			outletName: selectedOutlet.value,
			discountId: discountAppliedDetails?.discounts?.id || null,
			totalPayableAmount:foodTotal,
			totalDiscountedAmount:discountAppliedDetails.totalDiscountAmount
		};
		placeOrderApi({
			data: payload,
			headers: {
				'x-access-token': localStorage.getItem('afjalMao-x-access-token'),
			},
		})
			.then((result) => {
				console.log('result ', result);
				setShowNotification({
					type: 'success',
					open: true,
					msg: 'Order placed successfully',
				});
			})
			.catch((error) => {});
	};

	const handleModalClose = () => {
		setAddressModal(false);
	};

	const handleAddAddress = async (addressDetails) => {
		await addAddress({
			headers: {
				'x-access-token': localStorage.getItem('afjalMao-x-access-token'),
			},
			data: addressDetails,
		})
			.then((result) => {
				console.log(result);
				handleModalClose();
				setShowNotification({
					type: 'success',
					open: true,
					msg: `Address added successfully`,
				});
				setSelectedAddress(result.data.data);
				setShowSelectedAddress(true);
			})
			.catch((err) => {
				console.log(err);
				return false;
			});
	};

	const handleLoginSignupClick = () => {
		router.push('/auth');
	};

	return (
		<Container>
			<Title>Checkout</Title>
			{(Object.keys(selectedFoodItem || {})|| []).length > 0 && (
				<FlexColumn>
					<FlexRow>
						<AddressContainer>
							{userDetails && userDetails.id ? (
								<>
									<Address
										setShowSelectedAddress={setShowSelectedAddress}
										showSelectedAddress={showSelectedAddress}
										addressModal={addressModal}
										setAddressModal={setAddressModal}
										handleModalClose={handleModalClose}
										handleAddAddress={handleAddAddress}
										setSelectedAddress={setSelectedAddress}
										selectedAddress={selectedAddress}
									/>
									<FlexColumn
										style={{
											marginTop: '12px',
											padding: '20px',
											border: '1px dotted gray',
										}}
									>
										<Text style={{ marginTop: '0px' }}>Select Outlet</Text>
										<FlexRow>
											<Select onChange={setSelectedOutlet} options={outlets} />
										</FlexRow>
									</FlexColumn>
									<FlexColumn
										style={{
											justifyContent: 'space-between',
											marginTop: '12px',
											padding: '20px',
											border: '1px dotted gray',
										}}
									>
										<Text style={{ marginTop: '0px' }}>Payment Method</Text>
										<FlexRow>
											<input
												type="radio"
												id="html"
												name="modeOfPayment"
												value="cod"
												checked
											/>
											<label htmlFor="cod">Cash on Delivery (COD)</label>
										</FlexRow>
									</FlexColumn>
								</>
							) : (
								<FlexColumn>
									To place your order now, log in to your existing account or sign up.
									<ConfirmOrderButton
										onClick={handleLoginSignupClick}
										style={{ marginTop: '20px', width: 'fit-content' }}
									>
										Login / Signup{' '}
									</ConfirmOrderButton>
								</FlexColumn>
							)}
						</AddressContainer>
						<CheckoutContainer>
							<SubTitle>Cart Details</SubTitle>
							{Object.keys(selectedFoodItem).length ? (
								<>
									<Description>
										You choosed awesome item, please go ahead to complete your order
									</Description>
									<Instruction
										onChange={(e) => setSuggestion(e.target.value)}
										value={suggestion}
										placeholder="Any Suggestion or Instruction?"
									/>
									<Line />
									<FoodDetails selectedFoodItem={selectedFoodItem} />
									{discountAppliedDetails.discounts && (
										<>
											<ApplyCoupon>
												<ApplyCouponButton>
													<LocalOfferOutlinedIcon
														style={{ marginTop: 'auto', marginRight: '8px' }}
													/>{' '}
													{Object.keys(discountAppliedDetails.discounts).length > 0 ? (
														<>
															{discountAppliedDetails.discounts.discountType ===
																'Flat/Absolute' && 'Rs '}
															{discountAppliedDetails.discounts.discountValue
																? `${discountAppliedDetails.discounts.discountValue} `
																: '____'}
															{discountAppliedDetails.discounts.discountType ===
																'Percentage' && '%'}{' '}
															off on order above{' '}
															{discountAppliedDetails.discounts.discountOnOrderAbove
																? discountAppliedDetails.discounts.discountOnOrderAbove
																: '____'}
														</>
													) : (
														<>Not applicable for Discount</>
													)}
												</ApplyCouponButton>
											</ApplyCoupon>
											{Object.keys(discountAppliedDetails.discounts).length > 0 && (
												<FlexRow
													style={{
														width: '100%',
														marginLeft: 'auto',
														marginRight: 'auto',
													}}
												>
													<FlexColumn style={{ width: '90%' }}>
														Total Discount{' '}
													</FlexColumn>
													<FlexColumn>
														₹ {discountAppliedDetails.totalDiscountAmount}
													</FlexColumn>
												</FlexRow>
											)}
										</>
									)}
									<FlexRow
										style={{
											marginTop: '5%',
											width: '100%',
											marginLeft: 'auto',
											marginRight: 'auto',
										}}
									>
										<FlexColumn style={{ width: '85%' }}>
											<SubTotal>Subtotal</SubTotal>
										</FlexColumn>
										<FlexColumn style={{ width: '30%', textAlign: 'right' }}>
											<SubTotal>₹ {foodTotal}</SubTotal>
										</FlexColumn>
									</FlexRow>
								</>
							) : null}
							<FinalCheckout>
								<FlexRow
									style={{ alignItems: 'center', justifyContent: 'space-between' }}
								>
									<ConfirmOrderButton disabled={!userDetails.id} onClick={placeOrder}>
										CONFIRM ORDER
									</ConfirmOrderButton>
								</FlexRow>
							</FinalCheckout>
						</CheckoutContainer>
					</FlexRow>
				</FlexColumn>
			)}

			{Object.keys(selectedFoodItem || {}).length == 0 && <h2>No Food Item selected</h2>}

			<Snackbar
				anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
				autoHideDuration={2000}
				open={showNotification.open}
				onClose={handleClose}
				key={'to' + 'right'}
			>
				<Alert
					onClose={handleClose}
					severity={showNotification.type}
					sx={{ width: '100%' }}
				>
					{showNotification.msg}
				</Alert>
			</Snackbar>
		</Container>
	);
};

export default Checkout;
