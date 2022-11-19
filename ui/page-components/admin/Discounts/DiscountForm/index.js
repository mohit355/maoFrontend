import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import ShowMessage from '../../../ErrorHandling/showMessage';
import { Container, DiscountPreviewDiv, FormBox } from './styles';

const DiscountForm = ({ onSubmit, discountDetail, loading }) => {
	const discountTypeOptions = [
		{ value: 'Flat/Absolute', label: 'Flat/Absolute' },
		{ value: 'Percentage', label: 'Percentage' },
	];
	const [showNotification, setShowNotification] = useState({
		type: 'success',
		open: false,
		msg: '',
	});
	const [discountDetails, setDiscountDetails] = useState({
		discountType: '',
		discountValue: '',
		discountOnOrderAbove: '',
	});
	const [discountType, setDiscountType] = useState('');

	useEffect(() => {
		if (discountDetail) {
			setDiscountDetails({
				discountValue: discountDetail.discountValue,
				discountOnOrderAbove: discountDetail.discountOnOrderAbove,
			});
			setDiscountType({
				value: discountDetail.discountType,
				label: discountDetail.discountType,
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
		if (!discountType) {
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

		if (discountType.value === 'Percentage' && discountDetails.discountValue > 100) {
			setShowNotification({
				type: 'error',
				open: true,
				msg: 'Percentage discount value cannot be more than 100.',
			});
			return;
		}
		if (discountDetails.discountValue > discountDetails.discountOnOrderAbove) {
			setShowNotification({
				type: 'error',
				open: true,
				msg: 'Discount amount cannot be greater than applicable discount amount',
			});
			return;
		}

		const payload = {
			discountType: discountType.value,
			discountValue: discountDetails.discountValue,
			discountOnOrderAbove: discountDetails.discountOnOrderAbove,
		};
		onSubmit(payload);
	};

	return (
		<div>
			<Container>
				<FormBox>
					<form>
						<div>
							<div htmlFor="discountType">Discount Type</div>
							<Select
								value={discountType}
								name="discountType"
								onChange={setDiscountType}
								options={discountTypeOptions}
								placeholder="Select Discount type"
								required
							/>
						</div>
						<div>
							<div htmlFor="discountValue">Discount value</div>
							<input
								required
								type="number"
								id="discountValue"
								name="discountValue"
								value={discountDetails.discountValue}
								onChange={handleDiscountDetailsChange}
								placeholder="Enter Discount Value"
							/>
						</div>
						<div>
							<div htmlFor="discountOnOrderAbove">
								Discount will applied on order Above
							</div>
							<input
								required
								type="number"
								id="discountOnOrderAbove"
								name="discountOnOrderAbove"
								value={discountDetails.discountOnOrderAbove}
								onChange={handleDiscountDetailsChange}
								placeholder="Enter value"
							/>
						</div>
						<button type="submit" onClick={handleSubmitDiscount}>
							{loading ? (
								<CircularProgress />
							) : (
								<>{discountDetail ? 'Update' : 'Create'}Discount</>
							)}
						</button>
					</form>
				</FormBox>
				<DiscountPreviewDiv>
					<div>
						{discountType.value === 'Flat/Absolute' && 'Rs '}
						{discountDetails.discountValue ? `${discountDetails.discountValue} ` : '____'}
						{discountType.value === 'Percentage' && '%'} off on order above{' '}
						{discountDetails.discountOnOrderAbove
							? discountDetails.discountOnOrderAbove
							: '____'}
					</div>
				</DiscountPreviewDiv>
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
