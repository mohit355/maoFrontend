import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useRequest } from '../../../../helpers/request-helper';
import DiscountForm from '../DiscountForm';
import ShowMessage from '../../../ErrorHandling/showMessage';

const AddDiscount = () => {
	const router = useRouter();
	const [showNotification, setShowNotification] = useState({
		type: 'success',
		open: false,
		msg: '',
	});

	const [{ loading: addDiscountApiLoading }, addDiscountApi] = useRequest(
		{
			url: '/discount/add',
			method: 'POST',
		},
		{ manual: true },
	);

	const handleClose = () => {
		setShowNotification((prev) => {
			return {
				...prev,
				open: false,
			};
		});
	};

	const onAddDiscount = (DiscountDetails) => {
		addDiscountApi({
			data: DiscountDetails,
			headers: {
				'x-access-token': localStorage.getItem('afjalMao-x-access-token'),
			},
		})
			.then(() => {
				setShowNotification({
					type: 'success',
					open: true,
					msg: 'Discount created successfully',
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
	};

	return (
		<div>
			<DiscountForm onSubmit={onAddDiscount} loading={addDiscountApiLoading} />
			<ShowMessage
				handleClose={handleClose}
				open={showNotification.open}
				type={showNotification.type}
				message={showNotification.msg}
			/>
		</div>
	);
};

export default AddDiscount;
