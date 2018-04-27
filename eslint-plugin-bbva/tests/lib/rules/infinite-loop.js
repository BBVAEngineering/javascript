'use strict';

const rule = require('../../../lib/rules/infinite-loop');
const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester();

ruleTester.run('infinite-loop', rule, {
	valid: [
		'for (var i = 0; i < 10; i++) {}'
	],

	invalid: [
		{
			code: 'for (var i = 0; j < 10; k++) {}',
			errors: [{
				message: '"for" loop incrementers should modify the variable being tested in the loop\'s stop condition',
				type: 'ForStatement'
			}]
		}
	]
});
