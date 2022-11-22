import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import Snackbar from '@mui/material/Snackbar';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import { Alert } from '@mui/material';
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

const Checkout = () => {
	const [showNotification, setShowNotification] = useState({
		type: 'success',
		open: false,
		msg: '',
	});
	const [selectedFoodItem, setSelectedFoodItem] = useState({});
	const [selectedAddress, setSelectedAddress] = useState(null);
	const [selectedOutlet, setSelectedOutlet] = useState(null);
	const [suggestion, setSuggestion] = useState('')
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

	// const renderCart = Object.values(selectedFoodItem).map((values) => {
	// 	return (
	// 		<>
	// 			{values?.half >= 1 && (
	// 				<FlexRow
	// 					style={{
	// 						marginTop: '20px',
	// 						width: '75%',
	// 						marginLeft: 'auto',
	// 						marginRight: 'auto',
	// 					}}
	// 				>
	// 					<FlexColumn style={{ width: '70%' }}>
	// 						<FlexRow>
	// 							{values?.productType === 'veg' ? (
	// 								<VegIcon style={{ marginTop: 'auto', marginRight: '8px' }} />
	// 							) : (
	// 								<NonVegIcon style={{ marginTop: 'auto', marginRight: '8px' }} />
	// 							)}
	// 							{values?.foodName} (Half)
	// 						</FlexRow>
	// 					</FlexColumn>
	// 					<FlexColumn style={{ width: '10%' }}>X {values?.half}</FlexColumn>
	// 					<FlexColumn style={{ width: '25%', textAlign: 'right' }}>
	// 						₹ {values?.halfPrice}
	// 					</FlexColumn>
	// 				</FlexRow>
	// 			)}
	// 			{values?.full >= 1 && (
	// 				<FlexRow
	// 					style={{
	// 						marginTop: '20px',
	// 						width: '75%',
	// 						marginLeft: 'auto',
	// 						marginRight: 'auto',
	// 					}}
	// 				>
	// 					<FlexColumn style={{ width: '70%' }}>
	// 						<FlexRow>
	// 							{values?.productType === 'veg' ? (
	// 								<VegIcon style={{ marginTop: 'auto', marginRight: '8px' }} />
	// 							) : (
	// 								<NonVegIcon style={{ marginTop: 'auto', marginRight: '8px' }} />
	// 							)}
	// 							{values?.foodName} {values?.halfPrice && '(Full)'}
	// 						</FlexRow>
	// 					</FlexColumn>
	// 					<FlexColumn style={{ width: '10%' }}>X {values?.full}</FlexColumn>
	// 					<FlexColumn style={{ width: '25%', textAlign: 'right' }}>
	// 						{' '}
	// 						₹ {values?.fullPrice}
	// 					</FlexColumn>
	// 				</FlexRow>
	// 			)}
	// 		</>
	// 	);
	// });

	let foodTotal = 0;
	Object.values(selectedFoodItem).forEach((values) => {
		if (values?.half >= 1) {
			foodTotal += values?.halfPrice * values?.half;
		}
		if (values?.full >= 1) {
			foodTotal += values?.fullPrice * values?.full;
		}
	});

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

	const placeOrder=()=>{

		if(!selectedAddress){
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
			addressId: 'a906d31b-2beb-441b-8643-c0608c1fbd38',
			modeOfPayment: 'cash',
			outletName: 'ss',
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

	return (
		<Container>
			<Title>Checkout</Title>
			{Object.keys(selectedFoodItem).length>0 &&
				<FlexColumn>
				<FlexRow>
					<AddressContainer>
						<Address setSelectedAddress={setSelectedAddress} selectedAddress={selectedAddress} />
						<FlexRow style={{ alignItems: 'center', justifyContent: 'space-between' }}>
							<Text>Select Outlet</Text>
							<Select onChange={setSelectedOutlet} options={outlets} />
						</FlexRow>
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
						<FinalCheckout>
							<FlexRow style={{ alignItems: 'center', justifyContent: 'space-between' }}>
								<ConfirmOrderButton onClick={placeOrder} >CONFIRM ORDER</ConfirmOrderButton>
							</FlexRow>
						</FinalCheckout>
					</CheckoutContainer>
				</FlexRow>
			</FlexColumn>
			
			}

			{Object.keys(selectedFoodItem).length==0 && <h2>No Food Item selected</h2>}

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
