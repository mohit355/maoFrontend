import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useRouter } from 'next/router';
import { FlexColumn, FlexRow } from '../../../common/styles';
import { Container, Title, Description, Line, SubTotal, Checkout } from './styles';

import VegIcon from '../../../assets/veg-icon.svg';
import NonVegIcon from '../../../assets/non-veg-icon.svg';

import EmptyCart from './EmptyCart';

const CartContainer = ({ selectedFoodItem }) => {
	const renderCart = Object.values(selectedFoodItem).map((values) => {
		return (
			<>
				{values?.half >= 1 && (
					<FlexRow style={{ marginTop: '20px' }}>
						<FlexColumn style={{ width: '70%' }}>
							<FlexRow>
								{values?.productType === 'veg' ? (
									<VegIcon style={{ marginTop: 'auto', marginRight: '8px' }} />
								) : (
									<NonVegIcon style={{ marginTop: 'auto', marginRight: '8px' }} />
								)}
								{values?.foodName}
							</FlexRow>
						</FlexColumn>
						<FlexColumn style={{ width: '10%' }}>X {values?.half}</FlexColumn>
						<FlexColumn style={{ width: '25%', textAlign: 'right' }}>
							₹ {values?.halfPrice*values?.half}
						</FlexColumn>
					</FlexRow>
				)}
				{values?.full >= 1 && (
					<FlexRow style={{ marginTop: '20px' }}>
						<FlexColumn style={{ width: '70%' }}>
							<FlexRow>
								{values?.productType === 'veg' ? (
									<VegIcon style={{ marginTop: 'auto', marginRight: '8px' }} />
								) : (
									<NonVegIcon style={{ marginTop: 'auto', marginRight: '8px' }} />
								)}
								{values?.foodName}
							</FlexRow>
						</FlexColumn>
						<FlexColumn style={{ width: '10%' }}>X {values?.full}</FlexColumn>
						<FlexColumn style={{ width: '25%', textAlign: 'right' }}>
							₹ {values?.fullPrice*values?.full}
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

	const router = useRouter();

	const handleCheckout = () => {
		router.push('/checkout');
	};

	return (
		<Container>
			{Object.keys(selectedFoodItem).length ? (
				<>
					<Title>Cart</Title>
					<Description>
						compiled client and server successfully in 151 ms (456 modules) compiled
						client and server successfully in 151 ms (456 modules)
					</Description>
					<Line />
					{renderCart}
					<FlexRow style={{ marginTop: '15%' }}>
						<FlexColumn style={{ width: '50%' }}>
							<SubTotal>Subtotal</SubTotal>
						</FlexColumn>
						<FlexColumn style={{ width: '50%', textAlign: 'right' }}>
							₹ {foodTotal}
						</FlexColumn>
					</FlexRow>
					<FlexRow style={{ justifyContent: 'center', marginTop: '15%' }}>
						<Checkout onClick={handleCheckout}>
							CHECKOUT <ArrowForwardIcon style={{ fontSize: 18 }} />
						</Checkout>
					</FlexRow>
				</>
			) : (
				<EmptyCart />
			)}
		</Container>
	);
};

export default CartContainer;
