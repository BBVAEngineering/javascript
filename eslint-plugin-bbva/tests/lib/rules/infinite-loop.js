'use strict';

const rule = require('../../../lib/rules/infinite-loop');
const RuleTester = require('eslint').RuleTester;

var ruleTester = new RuleTester();
ruleTester.run("bbva", rule, {
    valid: [
		'for (var i = 0; i < 10; i++) {}',
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
