export const PRODUCTS = {
	fields: [
		{
			key: 'productName',
			label: 'Name',
			span: 2,
			func: 'startCase',
		},
		{
			key: 'productCategory',
			label: 'Category',
			span: 2,
			func: 'startCase',
		},
		{
			key: 'productFullPrice',
			label: 'Full Price (₹)',
			span: 2,
			func: 'startCase',
		},
		{
			key: 'productHalfPrice',
			label: 'Half Price (₹)',
			span: 2,
			func: 'startCase',
		},
		{
			key: 'productType',
			label: 'Type',
			span: 1,
			func: 'handleType',
		},
		{
			key: '',
			label: '',
			span: 1,
			func: 'handleEdit',
		},
		{
			key: '',
			label: '',
			span: 2,
			func: 'handleDelete',
		},
	],
};
