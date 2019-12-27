'use strict';

const rule = require('../../../lib/rules/no-throw-in-unchained-promise');
const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester();

ruleTester.run('no-throw-in-unchained-promise', rule, {
	valid: [
		{
			code: 'function foo() { return bar().then(() => { throw new Error(); }); }',
			parserOptions: { ecmaVersion: 2018 }
		},
		{
			code: 'function foo() { return bar().then(() => {}, () => { throw new Error(); }); }',
			parserOptions: { ecmaVersion: 2018 }
		},
		{
			code: 'function foo() { return bar().catch(() => { throw new Error(); }); }',
			parserOptions: { ecmaVersion: 2018 }
		},
		{
			code: 'function foo() { const a = bar().then(() => { throw new Error(); }); }',
			parserOptions: { ecmaVersion: 2018 }
		},
		{
			code: 'function foo() { const a = bar().then(() => {}, () => { throw new Error(); }); }',
			parserOptions: { ecmaVersion: 2018 }
		},
		{
			code: 'function foo() { const a = bar().catch(() => { throw new Error(); }); }',
			parserOptions: { ecmaVersion: 2018 }
		},
		{
			code: 'function foo() { let a; a = bar().then(() => { throw new Error(); }); }',
			parserOptions: { ecmaVersion: 2018 }
		},
		{
			code: 'function foo() { let a; a = bar().then(() => {}, () => { throw new Error(); }); }',
			parserOptions: { ecmaVersion: 2018 }
		},
		{
			code: 'function foo() { let a; a = bar().catch(() => { throw new Error(); }); }',
			parserOptions: { ecmaVersion: 2018 }
		},
		{
			code: 'function foo() { bar().then(() => { baz() }); }',
			parserOptions: { ecmaVersion: 2018 }
		},
		{
			code: 'function foo() { bar().then(() => {}, () => { baz(); }); }',
			parserOptions: { ecmaVersion: 2018 }
		},
		{
			code: 'function foo() { bar().catch(() => { baz(); }); }',
			parserOptions: { ecmaVersion: 2018 }
		},
	],

	invalid: [
		{
			code: 'function foo() { bar().then(() => { throw new Error(); }); }',
			parserOptions: { ecmaVersion: 2018 },
			errors: [{
				message: 'unchained promise handlers should not throw errors',
				type: 'ThrowStatement'
			}]
		},
		{
			code: 'function foo() { bar().then(() => {}, () => { throw new Error(); }); }',
			parserOptions: { ecmaVersion: 2018 },
			errors: [{
				message: 'unchained promise handlers should not throw errors',
				type: 'ThrowStatement'
			}]
		},
		{
			code: 'function foo() { bar().catch(() => { throw new Error(); }); }',
			parserOptions: { ecmaVersion: 2018 },
			errors: [{
				message: 'unchained promise handlers should not throw errors',
				type: 'ThrowStatement'
			}]
		}
	]
});
