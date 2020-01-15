'use strict';

const rule = require('../../../lib/rules/prefer-throw-in-promise');
const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester({
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2017
	}
});

ruleTester.run('prefer-throw-in-promise', rule, {
	valid: [
		'import RSVP, { reject } from \'rsvp\'; foo().then(() => { throw new Error(); });',
		'import { resolve } from \'rsvp\'; foo().then(() => { throw new Error(); });',
		'foo().then(() => { throw new Error(); });',
		'foo().then(() => {}, () => { throw new Error(); });',
		'foo().catch(() => { throw new Error(); });',
		'try { foo(); } catch(e) { throw new Error(); }',
		'import { reject } from \'rsvp\'; function bar() { try { foo(); } catch(e) { return reject(); } }',
		'import RSVP from \'rsvp\'; function bar() { try { foo(); } catch(e) { return RSVP.reject(); } }',
		'import { reject as alias } from \'rsvp\'; function bar() { try { foo(); } catch(e) { return alias(); } }',
		'import alias from \'rsvp\'; function bar() { try { foo(); } catch(e) { return alias.reject(); } }',
		'function bar() { try { foo(); } catch(e) { return Promise.reject(); } }'
	],

	invalid: [
		{
			code: 'import { reject } from \'rsvp\'; foo().then(() => { return reject() });',
			errors: [{
				message: 'throw an Error instead of returning a rejected promise',
				type: 'CallExpression'
			}]
		},
		{
			code: 'import RSVP from \'rsvp\'; foo().then(() => { return RSVP.reject() });',
			errors: [{
				message: 'throw an Error instead of returning a rejected promise',
				type: 'CallExpression'
			}]
		},
		{
			code: 'import { reject as alias } from \'rsvp\'; foo().then(() => { return alias() });',
			errors: [{
				message: 'throw an Error instead of returning a rejected promise',
				type: 'CallExpression'
			}]
		},
		{
			code: 'import alias from \'rsvp\'; foo().then(() => { return alias.reject() });',
			errors: [{
				message: 'throw an Error instead of returning a rejected promise',
				type: 'CallExpression'
			}]
		},
		{
			code: 'foo().then(() => { return Promise.reject() });',
			errors: [{
				message: 'throw an Error instead of returning a rejected promise',
				type: 'CallExpression'
			}]
		},
		{
			code: 'import { reject } from \'rsvp\'; async function bar() { try { foo(); } catch(e) { return reject(); } }',
			errors: [{
				message: 'throw an Error instead of returning a rejected promise',
				type: 'CallExpression'
			}]
		},
		{
			code: 'import RSVP from \'rsvp\'; async function bar() { try { foo(); } catch(e) { return RSVP.reject(); } }',
			errors: [{
				message: 'throw an Error instead of returning a rejected promise',
				type: 'CallExpression'
			}]
		},
		{
			code: 'import { reject as alias } from \'rsvp\'; async function bar() { try { foo(); } catch(e) { return alias(); } }',
			errors: [{
				message: 'throw an Error instead of returning a rejected promise',
				type: 'CallExpression'
			}]
		},
		{
			code: 'import alias from \'rsvp\'; async function bar() { try { foo(); } catch(e) { return alias.reject(); } }',
			errors: [{
				message: 'throw an Error instead of returning a rejected promise',
				type: 'CallExpression'
			}]
		},
		{
			code: 'async function bar() { try { foo(); } catch(e) { return Promise.reject(); } }',
			errors: [{
				message: 'throw an Error instead of returning a rejected promise',
				type: 'CallExpression'
			}]
		}
	]
});
