'use strict';

const rule = require('../../../lib/rules/prefer-rsvp-promise-reject-errors');
const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester();

ruleTester.run('prefer-rsvp-promise-reject-errors', rule, {
	valid: [
		'reject(new Error())',
		'RSVP.reject(new Error())',
		'var err = new Error(); reject(err)',
		'var err = new Error(); RSVP.reject(err)',
		'function abc(err) { reject(err); }',
		'function abc(err) { RSVP.reject(err) }',
		'var err = someFn(); reject(err)',
		'var err = someFn(); RSVP.reject(err)',
		'var err = true || false; reject(err)',
		'var err = true || false; RSVP.reject(err)',
		'var err = 1 + 1; reject(err)',
		'var err = 1 + 1; RSVP.reject(err)',
		'var err = true ? 1 : 2; reject(err)',
		'var err = true ? 1 : 2; RSVP.reject(err)',
		'reject(err)',
		{
			code: 'import alias from \'rsvp\'; alias.reject(new Error())',
			parserOptions: {
				sourceType: 'module',
				ecmaVersion: 2018
			}
		},
		{
			code: 'import { reject as alias } from \'rsvp\'; alias(new Error())',
			parserOptions: {
				sourceType: 'module',
				ecmaVersion: 2018
			}
		}
	],

	invalid: [
		{
			code: 'import { reject } from \'rsvp\'; reject()',
			parserOptions: {
				sourceType: 'module',
				ecmaVersion: 2018
			},
			errors: [{
				message: 'Expected the RSVP Promise rejection reason to be an Error',
				type: 'CallExpression'
			}]
		},
		{
			code: 'import RSVP from \'rsvp\'; RSVP.reject()',
			parserOptions: {
				sourceType: 'module',
				ecmaVersion: 2018
			},
			errors: [{
				message: 'Expected the RSVP Promise rejection reason to be an Error',
				type: 'CallExpression'
			}]
		},
		{
			code: 'import { reject } from \'rsvp\'; reject(\'foo\')',
			parserOptions: {
				sourceType: 'module',
				ecmaVersion: 2018
			},
			errors: [{
				message: 'Expected the RSVP Promise rejection reason to be an Error',
				type: 'CallExpression'
			}]
		},
		{
			code: 'import { reject } from \'rsvp\'; reject(42)',
			parserOptions: {
				sourceType: 'module',
				ecmaVersion: 2018
			},
			errors: [{
				message: 'Expected the RSVP Promise rejection reason to be an Error',
				type: 'CallExpression'
			}]
		},
		{
			code: 'import { reject } from \'rsvp\'; reject(true)',
			parserOptions: {
				sourceType: 'module',
				ecmaVersion: 2018
			},
			errors: [{
				message: 'Expected the RSVP Promise rejection reason to be an Error',
				type: 'CallExpression'
			}]
		},
		{
			code: 'import { reject } from \'rsvp\'; reject({ foo: \'bar\' })',
			parserOptions: {
				sourceType: 'module',
				ecmaVersion: 2018
			},
			errors: [{
				message: 'Expected the RSVP Promise rejection reason to be an Error',
				type: 'CallExpression'
			}]
		},
		{
			code: 'import { reject } from \'rsvp\'; const foo = \'bar\'; reject(foo)',
			parserOptions: {
				sourceType: 'module',
				ecmaVersion: 2018
			},
			errors: [{
				message: 'Expected the RSVP Promise rejection reason to be an Error',
				type: 'CallExpression'
			}]
		},
		{
			code: 'import alias from \'rsvp\'; alias.reject()',
			parserOptions: {
				sourceType: 'module',
				ecmaVersion: 2018
			},
			errors: [{
				message: 'Expected the RSVP Promise rejection reason to be an Error',
				type: 'CallExpression'
			}]
		},
		{
			code: 'import { reject as alias } from \'rsvp\'; alias()',
			parserOptions: {
				sourceType: 'module',
				ecmaVersion: 2018
			},
			errors: [{
				message: 'Expected the RSVP Promise rejection reason to be an Error',
				type: 'CallExpression'
			}]
		}
	]
});
