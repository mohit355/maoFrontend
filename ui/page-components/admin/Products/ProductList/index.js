import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { CircularProgress } from '@mui/material';
import { useRequest } from '../../../../helpers/request-helper';
import { Container, FlexContainer, FlexListItem } from './styles';
import ConfirmModal from '../../../shared/BackDrop/ConfirmModal';
import { PRODUCTS } from './listProduct';
import CardList from '../../../../common/CardList';
import {foodCategoryType} from '../../../../common/selectFoodCategory/index';

const ProductList = ({listAllProducts,allProducts,getAllProductsLoading}) => {

	const foodTypeOption=[{value:"",label:"All"},{value:'veg',label:"Veg"},{value:'non-veg',label:"Non-veg"}]
	// const [allProducts, setAllProducts] = useState([]);
	const [openDeleteModal, setOpenDeleteModal] = useState(false);
	const [deleteableId, setDeleteableId] = useState('');
	const [{ loading: deleteLoading }, deleteProduct] = useRequest(
		{
			url: '/product/delete',
			method: 'DELETE',
		},
		{ manual: true },
	);

	const handleDeleteProduct = (productId) => {
		setDeleteableId(productId);
		setOpenDeleteModal(true);
	};

	const handleDelete = () => {
		const productId = deleteableId;
		deleteProduct({
			url: `/product/delete/${productId}`,
			headers: {
				'x-access-token': localStorage.getItem('afjalMao-x-access-token'),
			},
		})
			.then(() => {
				handleDeleteModalClose();
				listAllProducts();
			})
			.catch((err) => {});
	};

	const handleDeleteModalClose = () => {
		setOpenDeleteModal(false);
	};

	const config = PRODUCTS;

	return (
		<Container>
			{getAllProductsLoading ? (
				<CircularProgress />
			) : (
				<>
					<CardList
				fields={config.fields}
				data={allProducts}
				loading={getAllProductsLoading}
				handleDeleteProduct={handleDeleteProduct}
			/>
			<ConfirmModal
				open={openDeleteModal}
				loading={deleteLoading}
				onConfirm={handleDelete}
				onClose={handleDeleteModalClose}
				heading="Delete Food"
				content="Are you sure you want to delete food from menu"
				buttonName={['No', 'Yes']}
			/>
				</>
			)}

		</Container>
	);
};

export default ProductList;
