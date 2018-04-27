'use strict';

const rule = require('../../../lib/rules/jquery-selector-length');
const RuleTester = require('eslint').RuleTester;

var ruleTester = new RuleTester();
ruleTester.run("bbva", rule, {
    valid: [
		'if ($("#foo").length) {}'
    ],

    invalid: [
        {
            code: 'if ($("#foo")) {}',
            errors: [{
                message: 'Selection results should be tested with "length"',
                type: 'IfStatement'
            }]
        }, {
            code: 'if ($(\'#foo\')) {}',
            errors: [{
                message: 'Selection results should be tested with "length"',
                type: 'IfStatement'
            }]
        }
    ]
});
