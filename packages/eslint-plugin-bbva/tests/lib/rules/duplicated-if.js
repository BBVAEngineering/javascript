"use strict";

const rule = require("../../../lib/rules/duplicated-if");
const RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester();

ruleTester.run("duplicated-if", rule, {
  valid: [
    "if (a === 1) { foo() } else if (a === 2) { bar() }",
    "if (a === 1) { foo() }",
  ],

  invalid: [
    {
      code: "if (a === 1) {} else if (a === 1) {}",
      errors: [
        {
          message:
            'Related "if/else if" statements should not have the same block',
          type: "IfStatement",
        },
        {
          message:
            'Related "if/else if" statements should not have the same condition',
          type: "IfStatement",
        },
      ],
    },
    {
      code: "if (a === 1) {} else if (a === 2) {}",
      errors: [
        {
          message:
            'Related "if/else if" statements should not have the same block',
          type: "IfStatement",
        },
      ],
    },
    {
      code: "if (a === 1) { foo() } else if (a === 1) { bar() }",
      errors: [
        {
          message:
            'Related "if/else if" statements should not have the same condition',
          type: "IfStatement",
        },
      ],
    },
  ],
});
