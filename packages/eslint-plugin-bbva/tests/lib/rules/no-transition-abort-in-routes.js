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
			code: 'Route.extend({ model(params, transition) { transition.abort(); } })',
			filename: 'foo/bar/baz.js'
		},
		{
			code: 'Route.extend({ beforeModel(transition) { abortIfNotFirst(transition); } })',
			filename: 'foo/bar/route.js'
		},
		{
			code: 'Route.extend({ willTransition(transition) { abortIfNotFirst(transition); } })',
			filename: 'foo/bar/route.js'
		},
		{
			code: 'Route.extend({ loading(transition, route) { abortIfNotFirst(transition); } })',
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
			code: 'Route.extend({ error(error, transition) { abortIfNotFirst(transition); } })',
			filename: 'foo/bar/route.js'
		},
		{
			code: 'Route.extend({ resetController(controller, isExiting, transition) { abortIfNotFirst(transition); } })',
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
			code: 'Route.extend({ beforeModel(transition) { transition.abort(); } })',
			filename: 'foo/bar/route.js',
			errors: [{
				message: 'avoid aborting the transition on route hooks, use an abort with fallback method instead',
				type: 'CallExpression'
			}]
		},
		{
			code: 'Route.extend({ willTransition(transition) { transition.abort(); } })',
			filename: 'foo/bar/route.js',
			errors: [{
				message: 'avoid aborting the transition on route hooks, use an abort with fallback method instead',
				type: 'CallExpression'
			}]
		},
		{
			code: 'Route.extend({ loading(transition, route) { transition.abort(); } })',
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
		},
		{
			code: 'Route.extend({ error(error, transition) { transition.abort(); } })',
			filename: 'foo/bar/route.js',
			errors: [{
				message: 'avoid aborting the transition on route hooks, use an abort with fallback method instead',
				type: 'CallExpression'
			}]
		},
		{
			code: 'Route.extend({ resetController(controller, isExiting, transition) { transition.abort(); } })',
			filename: 'foo/bar/route.js',
			errors: [{
				message: 'avoid aborting the transition on route hooks, use an abort with fallback method instead',
				type: 'CallExpression'
			}]
		}
	]
});
