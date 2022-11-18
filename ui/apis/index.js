export default {
	SIGNUP: {
		url: '/signup',
		method: 'POST',
	},
	SIGNIN: {
		url: '/sigin',
		method: 'POST',
	},
	REGISTER_OTP: {
		url: '/sendOTP/reisterOTP',
		method: 'POST',
	},
	VERIFY_OTP: {
		url: '/sendOTP/verifyOTP',
		method: 'POST',
	},
	MAKE_ADMIN: {
		url: '/makeAdmin',
		method: 'POST',
	},
	REMOVE_ADMIN: {
		url: '/removeAdmin',
		method: 'POST',
	},
	GET_ALL_ADDRESS_BY_USER_ID: {
		url: '/address/getByUserId',
		method: 'GET',
	},
	GET_ALL_ADDRESS_BY_ID: {
		url: '/address/getById/',
		method: 'GET',
	},
	ADD_ADDRESS: {
		url: '/address/add',
		method: 'POST',
	},
	UPDATE_ADDRESS: {
		url: '/address/update',
		method: 'POST',
	},
	DELETE_ADDRESS: {
		url: '/address/delete/',
		method: 'DELETE',
	},
	GET_ALL_PRODUCT: {
		url: '/product/all',
		method: 'GET',
	},
	GET_PRODUCT_BY_ID: {
		url: '/product',
		method: 'GET',
	},
	ADD_PROUDUCT: {
		url: '/product/add',
		method: 'POST',
	},
	UPDATE_PRODUCT: {
		url: '/product/update',
		method: 'POST',
	},
	DELETE_PRODUCT: {
		url: '/product/delete',
		method: 'DELETE',
	},
	GET_ALL_DISCOUNTS: {
		url: '/discount/all',
		method: 'GET',
	},
	GET_DISCOUNT_BY_ID: {
		url: '/discount',
		method: 'GET',
	},
	GET_DISCOUNT_BY_PRICE_RANGE: {
		url: '/discount/discountByOrderPrice',
		method: 'GET',
	},
	ADD_DISCOUNT: {
		url: '/discount/add',
		method: 'POST',
	},
	UPDATE_DISCOUNT: {
		url: '/discount/update',
		method: 'POST',
	},
	DELETE_DISCOUNT: {
		url: '/discount/delete',
		method: 'DELETE',
	},
	GET_ALL_ORDERS: {
		url: '/order/all',
		method: 'GET',
	},
	GET_ORDER_BY_ID: {
		url: '/order',
		method: 'GET',
	},
	CREATE_ORDER: {
		url: '/order/add',
		method: 'POST',
	},
};
