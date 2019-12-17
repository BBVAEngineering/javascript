'use strict';

module.exports = {
	root: true,
	parserOptions: {
		ecmaVersion: 2017,
		sourceType: 'module'
	},
	extends: [
		'eslint-config-bbva',
		'plugin:security/recommended'
	],
	plugins: [
		'node',
		'optimize-regex',
		'security',
		'no-unsanitized'
	],
	env: {
		node: true
	}
};
