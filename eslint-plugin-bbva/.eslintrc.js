module.exports = {
	root: true,
	env: {
		node: true
	},
	parserOptions: {
		ecmaVersion: 2017,
		sourceType: 'module'
	},
	globals: {
		Set: true
	},
	rules: [
		'../eslint-config-bbva/rules/basic.json',
		'../eslint-config-bbva/rules/error.json',
		'../eslint-config-bbva/rules/best-practices.json',
		'../eslint-config-bbva/rules/variables.json',
		'../eslint-config-bbva/rules/node.json',
		'../eslint-config-bbva/rules/issues.json',
		'../eslint-config-bbva/rules/es6.json'
	].reduce((acc, json) => Object.assign(acc, require(json).rules), {})
};
