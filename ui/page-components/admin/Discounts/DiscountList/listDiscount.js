export const DISCOUNT = {
	fields: [
		{
			key: 'discountValue',
			label: 'Discount Value',
			span: 2,
			func: 'startCase',
		},
		{
			key: 'discountType',
			label: 'Discount Type',
			span: 2,
			func: 'startCase',
		},
		{
			key: 'discountOnOrderAbove',
			label: 'Discount On Order Above',
			span: 2,
			func: 'startCase',
		},
		{
			key: '',
			label: '',
			span: 1,
			func: 'handleEditDiscount',
		},
		{
			key: '',
			label: '',
			span: 2,
			func: 'handleDeleteDiscount',
		},
	],
};
