import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { CircularProgress } from '@mui/material';
import { useRequest } from '../../../../helpers/request-helper';
import DiscountForm from '../DiscountForm';
import ShowMessage from '../../../ErrorHandling/showMessage';

const EditDiscount = () => {
	const router = useRouter();

	const { discountId } = router.query;
	const [discount, setDiscount] = useState([]);
	const [showNotification, setShowNotification] = useState({
		type: 'success',
		open: false,
		msg: '',
	});
	const [{ loading: discountByIdLoading }, getDiscountByIdApi] = useRequest(
		{
			url: `/discount/${discountId}`,
			method: 'GET',
		},
		{ manual: true },
	);
	const [{ loading: updateDiscountLoading }, updateDiscountApi] = useRequest(
		{
			url: `/discount/update/${discountId}`,
			method: 'POST',
		},
		{ manual: true },
	);

	useEffect(() => {
		if (discountId) {
			getDiscountByIdApi()
				.then((response) => {
					setDiscount(response.data.data);
				})
				.catch(() => {});
		}
	}, [discountId]);

	const handleClose = () => {
		setShowNotification((prev) => {
			return {
				...prev,
				open: false,
			};
		});
	};

	const onUpdateDiscount = (updatedDiscount) => {
		updateDiscountApi({
			data: updatedDiscount,
			headers: {
				'x-access-token': localStorage.getItem('afjalMao-x-access-token'),
			},
		})
			.then(() => {
				setShowNotification({
					type: 'success',
					open: true,
					msg: 'Discount updated successfully',
				});
				router.push('/admin/discounts');
			})
			.catch(() => {
				setShowNotification({
					type: 'error',
					open: true,
					msg: 'Unable to create Discount. Please try again later',
				});
			});

		router.push('/admin/discounts');
	};

	return (
		<div>
			{discountByIdLoading ? (
				<CircularProgress />
			) : (
				<>
					<DiscountForm
						onSubmit={onUpdateDiscount}
						discountDetail={discount}
						loading={updateDiscountLoading}
					/>
					<ShowMessage
						handleClose={handleClose}
						open={showNotification.open}
						type={showNotification.type}
						message={showNotification.msg}
					/>
				</>
			)}
		</div>
	);
};

export default EditDiscount;
