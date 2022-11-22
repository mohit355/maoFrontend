/**
 * Merge multiple classnames
 * @param {[string|number]} 	classNames - Array of classnames to be merged
 * @returns	Merged Classname String
 */
const mergeClassNames = (...classNames) => {
	let classNameString = '';
	classNames.forEach((cl) => {
		if (cl) {
			if (['string', 'number'].includes(typeof cl)) {
				classNameString += ` ${cl.toString()}`;
			} else {
				throw new Error('Classnames can only be of type string or number');
			}
		}
	});
	return classNameString;
};

export default mergeClassNames;
