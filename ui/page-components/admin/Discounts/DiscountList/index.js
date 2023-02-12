import React, { useEffect, useState } from 'react';
import { useRequest } from '../../../../helpers/request-helper';
import ConfirmModal from '../../../shared/BackDrop/ConfirmModal';
import CardList from '../../../../common/CardList';
import { DISCOUNT } from './listDiscount';
import { Container } from './styles';

const DiscountList = () => {
	const [allDiscounts, setAllDiscounts] = useState([]);
	const [openDeleteModal, setOpenDeleteModal] = useState(false);
	const [deleteableId, setDeleteableId] = useState('');
	const [{ loading: getAllDiscountsLoading }, getAllDiscounts] = useRequest(
		{
			url: '/discount/all',
			method: 'GET',
		},
		{ manual: true },
	);

	const [{ loading: deleteLoading }, deleteDiscountApi] = useRequest(
		{
			url: '/product/delete',
			method: 'DELETE',
		},
		{ manual: true },
	);

	const listAllDiscounts = () => {
		getAllDiscounts()
			.then((response) => {
				setAllDiscounts(response.data.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		listAllDiscounts();
	}, []);

	const handleDeleteDiscount = (discountId) => {
		setDeleteableId(discountId);
		setOpenDeleteModal(true);
	};

	const handleDelete = () => {
		const discountId = deleteableId;
		deleteDiscountApi({
			url: `/discount/delete/${discountId}`,
			headers: {
				'x-access-token': localStorage.getItem('afjalMao-x-access-token'),
			},
		})
			.then(() => {
				handleDeleteModalClose();
				listAllDiscounts();
			})
			.catch((err) => {
				// handleDeleteModalClose();
			});
	};

	const handleDeleteModalClose = () => {
		setOpenDeleteModal(false);
	};

	const config = DISCOUNT;

	return (
		<Container>
			<CardList
				fields={config.fields}
				data={allDiscounts}
				loading={getAllDiscountsLoading}
				handleDeleteDiscount={handleDeleteDiscount}
			/>
			<ConfirmModal
				open={openDeleteModal}
				loading={deleteLoading}
				onConfirm={handleDelete}
				onClose={handleDeleteModalClose}
				heading="Delete discount"
				content="Are you sure you want to delete the discount"
				buttonName={['No', 'Yes']}
			/>
		</Container>
	);
};

export default DiscountList;
