"use strict";

const rule = require("../../../lib/rules/useless-increment");
const RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester();

ruleTester.run("useless-increment", rule, {
  valid: ["j = k++", "j = ++j"],

  invalid: [
    {
      code: "j = j++",
      errors: [
        {
          message: "Values should not be uselessly incremented",
          type: "AssignmentExpression",
        },
      ],
    },
  ],
});
