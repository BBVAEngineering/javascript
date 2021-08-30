"use strict";

const rule = require("../../../lib/rules/jquery-selector-length");
const RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester();

ruleTester.run("jquery-selector-length", rule, {
  valid: [
    'if (selector("#foo")) {}',
    'if (jQuery("#foo").length) {}',
    'if (jQuery("#foo")) {}',
    'if ($("#foo").length) {}',
  ],

  invalid: [
    {
      code: 'if ($("#foo")) {}',
      errors: [
        {
          message: 'Selection results should be tested with "length"',
          type: "IfStatement",
        },
      ],
    },
    {
      code: "if ($('#foo')) {}",
      errors: [
        {
          message: 'Selection results should be tested with "length"',
          type: "IfStatement",
        },
      ],
    },
  ],
});
