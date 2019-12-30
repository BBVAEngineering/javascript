'use strict';

const rule = require('../../../lib/rules/no-throw-in-unchained-promise');
const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2015 } });

ruleTester.run('no-throw-in-unchained-promise', rule, {
	valid: [
		{
			code: 'function foo() { return bar().then(() => { throw new Error(); }); }'
		},
		{
			code: 'function foo() { return bar().then(() => {}, () => { throw new Error(); }); }'
		},
		{
			code: 'function foo() { return bar().catch(() => { throw new Error(); }); }'
		},
		{
			code: 'function foo() { const a = bar().then(() => { throw new Error(); }); }'
		},
		{
			code: 'function foo() { const a = bar().then(() => {}, () => { throw new Error(); }); }'
		},
		{
			code: 'function foo() { const a = bar().catch(() => { throw new Error(); }); }'
		},
		{
			code: 'function foo() { let a; a = bar().then(() => { throw new Error(); }); }'
		},
		{
			code: 'function foo() { let a; a = bar().then(() => {}, () => { throw new Error(); }); }'
		},
		{
			code: 'function foo() { let a; a = bar().catch(() => { throw new Error(); }); }'
		},
		{
			code: 'function foo() { bar().then(() => { baz() }); }'
		},
		{
			code: 'function foo() { bar().then(() => {}, () => { baz(); }); }'
		},
		{
			code: 'function foo() { bar().catch(() => { baz(); }); }'
		},
	],

	invalid: [
		{
			code: 'function foo() { bar().then(() => { throw new Error(); }); }',
			errors: [{
				message: 'unchained promise handlers should not throw errors',
				type: 'ThrowStatement'
			}]
		},
		{
			code: 'function foo() { bar().then(() => {}, () => { throw new Error(); }); }',
			errors: [{
				message: 'unchained promise handlers should not throw errors',
				type: 'ThrowStatement'
			}]
		},
		{
			code: 'function foo() { bar().catch(() => { throw new Error(); }); }',
			errors: [{
				message: 'unchained promise handlers should not throw errors',
				type: 'ThrowStatement'
			}]
		}
	]
});
