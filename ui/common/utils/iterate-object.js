const iterateSubKeys = (itemField, value) => {
	let val = value;
	if ((itemField.subKeys || []).length) {
		itemField.subKeys.forEach((subKey) => {
			val = (val || {})[subKey];
		});
	}
	return val;
};

export default iterateSubKeys;
