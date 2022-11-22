// import React from 'react';
import getByKey from './getByKey';

import isEmpty from './isEmpty';

import ActionFunction from './actions';
import iterateSubKeys from './iterate-object';

const getValue = (
	itemData,
	itemField,
	// eslint-disable-next-line no-unused-vars
	isMobile = false,
	functions = {},
	emptyState,
) => {
	if (isEmpty(itemData) || isEmpty(itemField)) {
		return emptyState || '';
	}

	let val = getByKey(itemData, itemField.key);

	val = iterateSubKeys(itemField, val);

	if (itemField.func) {
		if (functions[itemField.func]) {
			val = functions[itemField.func](itemData, itemField);
		} else if (ActionFunction[itemField.func]) {
			val = ActionFunction[itemField.func](val);
		}
	}

	return val === null || val === undefined ? null : val;
};

export default getValue;
