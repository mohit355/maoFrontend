import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { CircularProgress } from '@mui/material';
import { useRequest } from '../../../../helpers/request-helper';
import { Container, FlexContainer, FlexListItem } from './styles';
import ConfirmModal from '../../../shared/BackDrop/ConfirmModal';

const ProductList = () => {
	const [allProducts, setAllProducts] = useState([]);
	const [openDeleteModal, setOpenDeleteModal] = useState(false);
	const [deleteableId, setDeleteableId] = useState('');
	const [{ loading: getAllProductsLoading }, getAllProducts] = useRequest(
		{
			url: '/admin/product/all',
			method: 'GET',
		},
		{ manual: true },
	);

	const [{ loading: deleteLoading }, deleteProduct] = useRequest(
		{
			url: '/product/delete',
			method: 'DELETE',
		},
		{ manual: true },
	);

	const listAllProducts = () => {
		getAllProducts({
			headers: {
				'x-access-token': localStorage.getItem('afjalMao-x-access-token'),
			},
		})
			.then((response) => {
				setAllProducts(response.data.data);
			})
			.catch((err) => {});
	};

	useEffect(() => {
		listAllProducts();
	}, []);

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

	return (
		<Container>
			{getAllProductsLoading ? (
				<CircularProgress />
			) : (
				<FlexContainer>
					<div>
						<select>
							<option>Category</option>
						</select>
						<select>
							<option>Type</option>
						</select>
						<input type="text" placeholder="search food name" />
					</div>
					<div>
						{allProducts.map((product) => {
							return (
								<FlexListItem key={product.id}>
									<div>{product.productName}</div>

									<div>
										<Link href={`/admin/products/edit/${product.id}`}>
											<EditIcon />
										</Link>
										<span
											className="deleteFoodItem"
											onClick={() => handleDeleteProduct(product.id)}
										>
											<DeleteIcon />
										</span>
									</div>
								</FlexListItem>
							);
						})}
					</div>
				</FlexContainer>
			)}
			<ConfirmModal
				open={openDeleteModal}
				loading={deleteLoading}
				onConfirm={handleDelete}
				onClose={handleDeleteModalClose}
				heading="Delete Food"
				content="Are you sure you want to delete food from menu"
				buttonName={['No', 'Yes']}
			/>
		</Container>
	);
};

export default ProductList;
