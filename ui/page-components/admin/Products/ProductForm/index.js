import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Form, Button, Container, Title } from './styles';
import { foodCategoryType } from '../../../../common/selectFoodCategory/index';
import ShowMessage from '../../../ErrorHandling/showMessage';

const ProductForm = ({ onSubmit, isEdit, loading, product }) => {
	const [productDetails, setProductDetails] = useState({
		productName: '',
		productImage: '',
		productHalfPrice: null,
		productFullPrice: '',
		productType: '',
		productCategory: '',
		productDesc: '',
	});
	const [showNotification, setShowNotification] = useState({
		type: 'success',
		open: false,
		msg: '',
	});

	useEffect(() => {
		if (isEdit) {
			setProductDetails({ ...product });
		}
	}, [product]);

	const handleProductDetailsChange = (event) => {
		const { name } = event.target;
		const { value } = event.target;

		setProductDetails((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
	};

	const handleProductSubmit = (event) => {
		event.preventDefault();
		console.log(productDetails);
		let emptyFieldName = '';
		Object.keys(productDetails).forEach((fieldName) => {
			if (
				fieldName !== 'productDesc' && fieldName !== 'productHalfPrice' &&
				productDetails[fieldName].length === 0 &&
				emptyFieldName === ''
			) {
				emptyFieldName = fieldName;
			}
		});
		if (emptyFieldName) {
			setShowNotification({
				type: 'error',
				open: true,
				msg: `${emptyFieldName} is required`,
			});
		} else {
			onSubmit(productDetails);
		}
	};

	const handleClose = () => {
		setShowNotification((prev) => {
			return {
				...prev,
				open: false,
			};
		});
	};

	return (
		<Container>
			<Title> {isEdit && !loading ? 'Edit Food' : 'Add New Food Item'}</Title>
			<Form>
				<label htmlFor="productName">Food item name *</label>
				<input
					required
					id="productName"
					name="productName"
					label="Food Item Name"
					value={productDetails.productName}
					onChange={handleProductDetailsChange}
					placeholder="Food name"
				/>
				<label htmlFor="productImage">Food image link *</label>
				<input
					required
					id="productImage"
					name="productImage"
					type="url"
					label="Food Image"
					value={productDetails.productImage}
					onChange={handleProductDetailsChange}
					placeholder="Food image link"
				/>
				<label htmlFor="productFullPrice">Food's full price *</label>
				<input
					required
					type="number"
					id="productFullPrice"
					name="productFullPrice"
					label="Full Rate"
					value={productDetails.productFullPrice}
					onChange={handleProductDetailsChange}
					placeholder="Full price"
				/>
				<label htmlFor="productHalfprice">Food's half price <span style={{color:'gray', fontSize:'12px'}} > (Leave it blank if half product is not applicable)</span></label>
				<input
					type="number"
					id="productHalfPrice"
					name="productHalfPrice"
					label="Half Rate"
					value={productDetails.productHalfPrice}
					onChange={handleProductDetailsChange}
					placeholder="Half price"
				/>
				<label htmlFor="productType">Food Type *</label>
				<select
					required
					id="productType"
					name="productType"
					value={productDetails.productType}
					onChange={handleProductDetailsChange}
				>
					<option value="">Select food type</option>
					<option value="veg">veg</option>
					<option value="non-veg">non-veg</option>
				</select>
				<label htmlFor="productCategory">Food Category *</label>
				<select
					required
					id="productCategory"
					name="productCategory"
					value={productDetails.productCategory}
					onChange={handleProductDetailsChange}
				>
					{foodCategoryType.map((category, index) => {
						if (index === 0) {
							return (
								<option key={category.value} value={category.value}>
									Select Category
								</option>
							);
						}
						if (index > 0) {
							return (
								<option key={category.value} value={category.value}>
									{category.label}
								</option>
							);
						}
					})}
				</select>
				<label htmlFor="productDesc">Food's description</label>
				<textarea
					required
					id="productDesc"
					name="productDesc"
					rows={3}
					cols={4}
					value={productDetails.productDesc}
					onChange={handleProductDetailsChange}
					placeholder="write description here"
				/>
				<Button disabled={!!loading} onClick={handleProductSubmit}>
					{' '}
					{loading ? <CircularProgress /> : ''}{' '}
					{isEdit && !loading ? 'UPDATE FOOD' : 'ADD FOOD'}
				</Button>
			</Form>
			<ShowMessage
				handleClose={handleClose}
				open={showNotification.open}
				type={showNotification.type}
				message={showNotification.msg}
			/>
		</Container>
	);
};

export default ProductForm;
