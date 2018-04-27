'use strict';

const rule = require('../../../lib/rules/inline-conditional');
const RuleTester = require('eslint').RuleTester;

var ruleTester = new RuleTester();
ruleTester.run("bbva", rule, {
    valid: [
		'if (foo) foo()',
		'function foo() { return foo && foo() }'
    ],

    invalid: [
        {
            code: 'foo && foo()',
            errors: [{
                message: 'Curly braces should be used instead inline conditionals',
                type: 'ExpressionStatement'
            }]
        }
    ]
});
