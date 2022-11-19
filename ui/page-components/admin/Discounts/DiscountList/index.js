import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { CircularProgress } from '@mui/material';
import { useRequest } from '../../../../helpers/request-helper';
import ConfirmModal from '../../../shared/BackDrop/ConfirmModal';

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
			.catch((err) => {});
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

	return (
		<div>
			{getAllDiscountsLoading ? (
				<CircularProgress />
			) : (
				<>
					<Link href="/admin/discounts/add">Add New Discount Coupons</Link>
					{allDiscounts.map((discount) => {
						return (
							<div key={discount.id}>
								{discount.id}
								<Link href={`/admin/discounts/edit/${discount.id}`}>
									<EditIcon />
								</Link>
								<span onClick={() => handleDeleteDiscount(discount.id)}>
									<DeleteIcon />
								</span>
							</div>
						);
					})}
					<ConfirmModal
						open={openDeleteModal}
						loading={deleteLoading}
						onConfirm={handleDelete}
						onClose={handleDeleteModalClose}
						heading="Delete discount"
						content="Are you sure you want to delete the discount"
						buttonName={['No', 'Yes']}
					/>
				</>
			)}
		</div>
	);
};

export default DiscountList;
