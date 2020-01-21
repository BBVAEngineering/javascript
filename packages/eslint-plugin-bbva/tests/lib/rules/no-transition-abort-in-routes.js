'use strict';

const rule = require('../../../lib/rules/no-transition-abort-in-routes');
const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2015 } });

ruleTester.run('no-transition-abort-in-routes', rule, {
	valid: [
		{
			code: 'Route.extend({ model(params, transition) { abortIfNotFirst(transition); } })',
			filename: 'foo/bar/route.js'
		},
		{
			code: 'Route.extend({ model(params, transition) { abortIfNotFirst(transition); } })',
			filename: 'foo/routes/bar.js'
		},
		{
			code: 'Route.extend({ model(params, transition) { abortIfNotFirst(transition); } })',
			filename: 'foo/mixins/bar.js'
		},
		{
			code: 'Route.extend({ model(params, transition) { abortIfNotFirst(transition); } })',
			filename: 'foo/reopens/bar.js'
		},
		{
			code: 'Route.extend({ model(params, transition) { transition.abort(); } })',
			filename: 'foo/bar/baz.js'
		},
		{
			code: 'Route.extend({ beforeModel(transition) { abortIfNotFirst(transition); } })',
			filename: 'foo/bar/route.js'
		},
		{
			code: 'Route.extend({ afterModel(resolvedModel, transition) { abortIfNotFirst(transition); } })',
			filename: 'foo/bar/route.js'
		},
		{
			code: 'Route.extend({ redirect(model, transition) { abortIfNotFirst(transition); } })',
			filename: 'foo/bar/route.js'
		},
		{
			code: 'Route.extend({ model(model, { queryParams }) { foo(); } })',
			filename: 'foo/bar/route.js'
		},
		{
			code: 'Route.extend({ model(model, transition) { foo(transition.queryParams); } })',
			filename: 'foo/bar/route.js'
		},
		{
			code: 'Route.extend({ model(model, transition) { foo(); } })',
			filename: 'foo/bar/route.js'
		}
	],

	invalid: [
		{
			code: 'Route.extend({ model(params, foo) { foo.abort(); } })',
			filename: 'foo/bar/route.js',
			errors: [{
				message: 'avoid aborting the transition on route hooks, use an abort with fallback method instead',
				type: 'CallExpression'
			}]
		},
		{
			code: 'Route.extend({ model(params, transition) { transition.abort(); } })',
			filename: 'foo/bar/route.js',
			errors: [{
				message: 'avoid aborting the transition on route hooks, use an abort with fallback method instead',
				type: 'CallExpression'
			}]
		},
		{
			code: 'Route.extend({ model(params, transition) { transition.abort(); } })',
			filename: 'foo/routes/bar.js',
			errors: [{
				message: 'avoid aborting the transition on route hooks, use an abort with fallback method instead',
				type: 'CallExpression'
			}]
		},
		{
			code: 'Route.extend({ model(params, transition) { transition.abort(); } })',
			filename: 'foo/mixins/bar.js',
			errors: [{
				message: 'avoid aborting the transition on route hooks, use an abort with fallback method instead',
				type: 'CallExpression'
			}]
		},
		{
			code: 'Route.extend({ model(params, transition) { transition.abort(); } })',
			filename: 'foo/reopens/bar.js',
			errors: [{
				message: 'avoid aborting the transition on route hooks, use an abort with fallback method instead',
				type: 'CallExpression'
			}]
		},
		{
			code: 'Route.extend({ beforeModel(transition) { transition.abort(); } })',
			filename: 'foo/bar/route.js',
			errors: [{
				message: 'avoid aborting the transition on route hooks, use an abort with fallback method instead',
				type: 'CallExpression'
			}]
		},
		{
			code: 'Route.extend({ afterModel(resolvedModel, transition) { transition.abort(); } })',
			filename: 'foo/bar/route.js',
			errors: [{
				message: 'avoid aborting the transition on route hooks, use an abort with fallback method instead',
				type: 'CallExpression'
			}]
		},
		{
			code: 'Route.extend({ redirect(model, transition) { transition.abort(); } })',
			filename: 'foo/bar/route.js',
			errors: [{
				message: 'avoid aborting the transition on route hooks, use an abort with fallback method instead',
				type: 'CallExpression'
			}]
		}
	]
});
