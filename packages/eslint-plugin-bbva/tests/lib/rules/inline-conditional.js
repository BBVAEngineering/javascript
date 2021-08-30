"use strict";

const rule = require("../../../lib/rules/inline-conditional");
const RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester();

ruleTester.run("infinite-conditional", rule, {
  valid: ["if (foo) foo()", "function foo() { return foo && foo() }"],

  invalid: [
    {
      code: "foo && foo()",
      errors: [
        {
          message: "Curly braces should be used instead inline conditionals",
          type: "ExpressionStatement",
        },
      ],
    },
  ],
});
