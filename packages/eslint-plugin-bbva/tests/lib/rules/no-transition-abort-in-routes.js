'use strict';

const rule = require('../../../lib/rules/no-transition-abort-in-routes');
const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester();

ruleTester.run('no-transition-abort-in-routes', rule, {
	valid: [
		{
			code: 'Route.extend({ model(params, transition) { abortIfNotFirst(transition); } })',
			filename: 'foo/bar/route.js',
			parserOptions: { ecmaVersion: 2018 }
		},
		{
			code: 'Route.extend({ model(params, transition) { abortIfNotFirst(transition); } })',
			filename: 'foo/routes/bar.js',
			parserOptions: { ecmaVersion: 2018 }
		},
		{
			code: 'Route.extend({ model(params, transition) { abortIfNotFirst(transition); } })',
			filename: 'foo/mixins/bar.js',
			parserOptions: { ecmaVersion: 2018 }
		},
		{
			code: 'Route.extend({ model(params, transition) { transition.abort(); } })',
			filename: 'foo/bar/baz.js',
			parserOptions: { ecmaVersion: 2018 }
		},
		{
			code: 'Route.extend({ beforeModel(transition) { abortIfNotFirst(transition); } })',
			filename: 'foo/bar/route.js',
			parserOptions: { ecmaVersion: 2018 }
		},
		{
			code: 'Route.extend({ willTransition(transition) { abortIfNotFirst(transition); } })',
			filename: 'foo/bar/route.js',
			parserOptions: { ecmaVersion: 2018 }
		},
		{
			code: 'Route.extend({ loading(transition, route) { abortIfNotFirst(transition); } })',
			filename: 'foo/bar/route.js',
			parserOptions: { ecmaVersion: 2018 }
		},
		{
			code: 'Route.extend({ afterModel(resolvedModel, transition) { abortIfNotFirst(transition); } })',
			filename: 'foo/bar/route.js',
			parserOptions: { ecmaVersion: 2018 }
		},
		{
			code: 'Route.extend({ redirect(model, transition) { abortIfNotFirst(transition); } })',
			filename: 'foo/bar/route.js',
			parserOptions: { ecmaVersion: 2018 }
		},
		{
			code: 'Route.extend({ error(error, transition) { abortIfNotFirst(transition); } })',
			filename: 'foo/bar/route.js',
			parserOptions: { ecmaVersion: 2018 }
		},
		{
			code: 'Route.extend({ resetController(controller, isExiting, transition) { abortIfNotFirst(transition); } })',
			filename: 'foo/bar/route.js',
			parserOptions: { ecmaVersion: 2018 }
		}
	],

	invalid: [
		{
			code: 'Route.extend({ model(params, foo) { foo.abort(); } })',
			filename: 'foo/bar/route.js',
			parserOptions: { ecmaVersion: 2018 },
			errors: [{
				message: 'avoid aborting the transition on route hooks, use an abort with fallback method instead',
				type: 'CallExpression'
			}]
		},
		{
			code: 'Route.extend({ model(params, transition) { transition.abort(); } })',
			filename: 'foo/bar/route.js',
			parserOptions: { ecmaVersion: 2018 },
			errors: [{
				message: 'avoid aborting the transition on route hooks, use an abort with fallback method instead',
				type: 'CallExpression'
			}]
		},
		{
			code: 'Route.extend({ model(params, transition) { transition.abort(); } })',
			filename: 'foo/routes/bar.js',
			parserOptions: { ecmaVersion: 2018 },
			errors: [{
				message: 'avoid aborting the transition on route hooks, use an abort with fallback method instead',
				type: 'CallExpression'
			}]
		},
		{
			code: 'Route.extend({ model(params, transition) { transition.abort(); } })',
			filename: 'foo/mixins/bar.js',
			parserOptions: { ecmaVersion: 2018 },
			errors: [{
				message: 'avoid aborting the transition on route hooks, use an abort with fallback method instead',
				type: 'CallExpression'
			}]
		},
		{
			code: 'Route.extend({ beforeModel(transition) { transition.abort(); } })',
			filename: 'foo/bar/route.js',
			parserOptions: { ecmaVersion: 2018 },
			errors: [{
				message: 'avoid aborting the transition on route hooks, use an abort with fallback method instead',
				type: 'CallExpression'
			}]
		},
		{
			code: 'Route.extend({ willTransition(transition) { transition.abort(); } })',
			filename: 'foo/bar/route.js',
			parserOptions: { ecmaVersion: 2018 },
			errors: [{
				message: 'avoid aborting the transition on route hooks, use an abort with fallback method instead',
				type: 'CallExpression'
			}]
		},
		{
			code: 'Route.extend({ loading(transition, route) { transition.abort(); } })',
			filename: 'foo/bar/route.js',
			parserOptions: { ecmaVersion: 2018 },
			errors: [{
				message: 'avoid aborting the transition on route hooks, use an abort with fallback method instead',
				type: 'CallExpression'
			}]
		},
		{
			code: 'Route.extend({ afterModel(resolvedModel, transition) { transition.abort(); } })',
			filename: 'foo/bar/route.js',
			parserOptions: { ecmaVersion: 2018 },
			errors: [{
				message: 'avoid aborting the transition on route hooks, use an abort with fallback method instead',
				type: 'CallExpression'
			}]
		},
		{
			code: 'Route.extend({ redirect(model, transition) { transition.abort(); } })',
			filename: 'foo/bar/route.js',
			parserOptions: { ecmaVersion: 2018 },
			errors: [{
				message: 'avoid aborting the transition on route hooks, use an abort with fallback method instead',
				type: 'CallExpression'
			}]
		},
		{
			code: 'Route.extend({ error(error, transition) { transition.abort(); } })',
			filename: 'foo/bar/route.js',
			parserOptions: { ecmaVersion: 2018 },
			errors: [{
				message: 'avoid aborting the transition on route hooks, use an abort with fallback method instead',
				type: 'CallExpression'
			}]
		},
		{
			code: 'Route.extend({ resetController(controller, isExiting, transition) { transition.abort(); } })',
			filename: 'foo/bar/route.js',
			parserOptions: { ecmaVersion: 2018 },
			errors: [{
				message: 'avoid aborting the transition on route hooks, use an abort with fallback method instead',
				type: 'CallExpression'
			}]
		}
	]
});
