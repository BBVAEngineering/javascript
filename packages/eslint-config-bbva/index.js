module.exports = {
	extends: [
		'./rules/basic.json',
		'./rules/best-practices.json',
		'./rules/error.json',
		'./rules/es6.json',
		'./rules/external.json',
		'./rules/issues.json',
		'./rules/node.json',
		'./rules/variables.json'
	].map(require.resolve)
};
