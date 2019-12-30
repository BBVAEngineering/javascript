'use strict';

const rule = require('../../../lib/rules/empty-line-before-return');
const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2015 } });

ruleTester.run('empty-line-before-return', rule, {
	valid: [
		'function foo() { return bar; }',
		'function foo() {\n\treturn bar;\n}',
		'function foo() {\n\tvar a = true;\n\n\treturn bar;\n}',
		'function foo() {\n\tif(a) {\n\t\treturn bar;\n\t}\n\nreturn qux;\n}',
		'() => { return bar; }',
		'() => { \n\treturn bar;\n}',
		'() => {\n\tconst a = true;\n\n\treturn bar;\n}',
		'() => {\n\tif(a) {\n\t\treturn bar;\n\t}\n\nreturn qux;\n}',
		'() => {\n\tconst a = true;\n\n\t// comment\n\treturn bar;\n}',
		'() => {\n\tconst a = true;\n\t// comment\n\n\treturn bar;\n}'
	],

	invalid: [
		{
			code: 'function foo() {\n\tvar a = true;\n\treturn bar;\n}',
			errors: [{
				message: 'A blank line is needed before a return statement',
				type: 'ReturnStatement'
			}],
			output: 'function foo() {\n\tvar a = true;\n\n\treturn bar;\n}'
		},
		{
			code: 'function foo() {\n\tif(a) {\n\t\treturn bar;\n\t}\nreturn qux;\n}',
			errors: [{
				message: 'A blank line is needed before a return statement',
				type: 'ReturnStatement'
			}],
			output: 'function foo() {\n\tif(a) {\n\t\treturn bar;\n\t}\n\nreturn qux;\n}'
		},
		{
			code: '() => {\n\tconst a = true;\n\treturn bar;\n}',
			errors: [{
				message: 'A blank line is needed before a return statement',
				type: 'ReturnStatement'
			}],
			output: '() => {\n\tconst a = true;\n\n\treturn bar;\n}'
		},
		{
			code: '() => {\n\tif(a) {\n\t\treturn bar;\n\t}\nreturn qux;\n}',
			errors: [{
				message: 'A blank line is needed before a return statement',
				type: 'ReturnStatement'
			}],
			output: '() => {\n\tif(a) {\n\t\treturn bar;\n\t}\n\nreturn qux;\n}'
		},
		{
			code: '() => {\n\tconst a = true;\n\t// comment\n\treturn bar;\n}',
			errors: [{
				message: 'A blank line is needed before a return statement',
				type: 'ReturnStatement'
			}],
			output: '() => {\n\tconst a = true;\n\n\t// comment\n\treturn bar;\n}',
		}
	]
});
