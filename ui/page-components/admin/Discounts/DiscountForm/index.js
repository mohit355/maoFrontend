import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ShowMessage from '../../../ErrorHandling/showMessage';
import {
	Button,
	Container,
	Discount,
	DiscountPreview,
	DiscountPreviewDiv,
	Form,
	Title,
} from './styles';

const DiscountForm = ({ onSubmit, discountDetail, loading }) => {
	const discountTypeOptions = ['Flat/Absolute', 'Percentage'];
	const [showNotification, setShowNotification] = useState({
		type: 'success',
		open: false,
		msg: '',
	});
	const [discountDetails, setDiscountDetails] = useState({
		discountType: 'Flat/Absolute',
		discountValue: '',
		discountOnOrderAbove: '',
	});

	console.log('sss ', discountDetails);

	useEffect(() => {
		if (discountDetail) {
			setDiscountDetails({
				discountType: discountDetail.discountType,
				discountValue: discountDetail.discountValue,
				discountOnOrderAbove: discountDetail.discountOnOrderAbove,
			});
		}
	}, [discountDetail]);

	const handleDiscountDetailsChange = (e) => {
		const { value, name } = e.target;
		setDiscountDetails((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
	};
	const handleClose = () => {
		setShowNotification((prev) => {
			return {
				...prev,
				open: false,
			};
		});
	};

	const handleSubmitDiscount = (e) => {
		e.preventDefault();
		if (!discountDetails.discountType) {
			setShowNotification({
				type: 'error',
				open: true,
				msg: 'Please select discount type',
			});
			return;
		}
		if (!discountDetails.discountValue) {
			setShowNotification({
				type: 'error',
				open: true,
				msg: 'Discount value is required',
			});
			return;
		}
		if (!discountDetails.discountOnOrderAbove) {
			setShowNotification({
				type: 'error',
				open: true,
				msg: 'Discount on order above is required',
			});
			return;
		}

		if (
			discountDetails.discountType === 'Percentage' &&
			discountDetails.discountValue > 100
		) {
			setShowNotification({
				type: 'error',
				open: true,
				msg: 'Percentage discount value cannot be more than 100.',
			});
			return;
		}
		if (discountDetails.discountValue > discountDetails.discountOnOrderAbove) {
			console.log(discountDetails.discountValue, discountDetails.discountOnOrderAbove);
			setShowNotification({
				type: 'error',
				open: true,
				msg: 'Discount amount cannot be greater than applicable discount amount',
			});
			return;
		}

		onSubmit(discountDetails);
	};

	return (
		<div>
			<Container>
				<Title>
					{discountDetail && !loading ? 'Edit Discount' : 'Add New Discount Coupon'}
				</Title>

				<Discount>
					<Form>
						<label htmlFor="discountType">Discount Type</label>
						<select
							name="discountType"
							value={discountDetails.discountType}
							onChange={handleDiscountDetailsChange}
							required
						>
							{discountTypeOptions.map((options) => (
								<option value={options}>{options}</option>
							))}
						</select>
						<label htmlFor="discountValue">Discount value</label>
						<input
							required
							type="number"
							id="discountValue"
							name="discountValue"
							value={discountDetails.discountValue}
							onChange={handleDiscountDetailsChange}
							placeholder="Enter Discount Value"
						/>
						<label htmlFor="discountOnOrderAbove">
							Discount will applied on order Above
						</label>
						<input
							required
							type="number"
							id="discountOnOrderAbove"
							name="discountOnOrderAbove"
							value={discountDetails.discountOnOrderAbove}
							onChange={handleDiscountDetailsChange}
							placeholder="Enter value"
						/>
						<Button type="submit" onClick={handleSubmitDiscount}>
							{loading ? (
								<CircularProgress />
							) : (
								<>{discountDetail ? 'Update' : 'Create'}Discount</>
							)}
						</Button>
					</Form>
					<DiscountPreviewDiv>
						<h3>Preview</h3>
						<DiscountPreview>
							{discountDetails.discountType === 'Flat/Absolute' && 'Rs '}
							{discountDetails.discountValue
								? `${discountDetails.discountValue} `
								: '____'}
							{discountDetails.discountType === 'Percentage' && '%'} off on order above{' '}
							{discountDetails.discountOnOrderAbove
								? discountDetails.discountOnOrderAbove
								: '____'}
						</DiscountPreview>
					</DiscountPreviewDiv>
				</Discount>
			</Container>
			<ShowMessage
				handleClose={handleClose}
				open={showNotification.open}
				type={showNotification.type}
				message={showNotification.msg}
			/>
		</div>
	);
};

export default DiscountForm;
