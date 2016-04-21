module.exports = {
	extends: [
		'./rules/basic.json',
		'./rules/error.json',
		'./rules/best-practices.json',
		'./rules/variables.json',
		'./rules/node.json',
		'./rules/issues.json',
		'./rules/es6.json',
	].map(require.resolve),

	rules: {
		// O_O
	}
};
