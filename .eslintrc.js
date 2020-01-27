'use strict';

module.exports = {
	root: true,
	parserOptions: {
		sourceType: 'script'
	},
	extends: [
		'plugin:node/recommended',
		'eslint-config-bbva'
	],
	plugins: [
		'node'
	]
};
