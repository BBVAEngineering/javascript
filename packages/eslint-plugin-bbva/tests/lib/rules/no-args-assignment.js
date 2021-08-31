"use strict";

const rule = require("../../../lib/rules/no-args-assignment");
const RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester();

ruleTester.run("no-args-assignment", rule, {
  valid: ["function foo(data) { data = 1 }"],

  invalid: [
    {
      code: "function foo() { arguments[0] = 1 }",
      errors: [
        {
          message: "Arguments should not be modified",
          type: "AssignmentExpression",
        },
      ],
    },
  ],
});
