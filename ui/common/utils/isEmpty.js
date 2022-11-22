const lodashIsEmpty = require('lodash/isEmpty');

const isEmpty = (input) => {
	if (input instanceof Date) {
		return false;
	}
	return lodashIsEmpty(input);
};

module.exports = isEmpty;
