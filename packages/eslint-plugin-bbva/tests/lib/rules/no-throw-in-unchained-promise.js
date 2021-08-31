"use strict";

const rule = require("../../../lib/rules/no-throw-in-unchained-promise");
const RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2015 } });

ruleTester.run("no-throw-in-unchained-promise", rule, {
  valid: [
    "function foo() { return bar().then(() => { throw new Error(); }); }",
    "function foo() { return bar().then(() => {}, () => { throw new Error(); }); }",
    "function foo() { return bar().catch(() => { throw new Error(); }); }",
    "function foo() { const a = bar().then(() => { throw new Error(); }); }",
    "function foo() { const a = bar().then(() => {}, () => { throw new Error(); }); }",
    "function foo() { const a = bar().catch(() => { throw new Error(); }); }",
    "function foo() { let a; a = bar().then(() => { throw new Error(); }); }",
    "function foo() { let a; a = bar().then(() => {}, () => { throw new Error(); }); }",
    "function foo() { let a; a = bar().catch(() => { throw new Error(); }); }",
    "function foo() { bar().then(() => { baz() }); }",
    "function foo() { bar().then(() => {}, () => { baz(); }); }",
    "function foo() { bar().catch(() => { baz(); }); }",
    "function foo() { return bar().then(() => { throw new Error(); }).then(() => {}) }",
    "var foo = () => bar().then(() => { throw new Error() });",
  ],

  invalid: [
    {
      code: "function foo() { bar().then(() => { throw new Error(); }); }",
      errors: [
        {
          message: "unchained promise handlers should not throw errors",
          type: "ThrowStatement",
        },
      ],
    },
    {
      code: "function foo() { bar().then(() => {}, () => { throw new Error(); }); }",
      errors: [
        {
          message: "unchained promise handlers should not throw errors",
          type: "ThrowStatement",
        },
      ],
    },
    {
      code: "function foo() { bar().catch(() => { throw new Error(); }); }",
      errors: [
        {
          message: "unchained promise handlers should not throw errors",
          type: "ThrowStatement",
        },
      ],
    },
    {
      code: "function foo() { bar().then(() => {}).then(() => { throw new Error(); }); }",
      errors: [
        {
          message: "unchained promise handlers should not throw errors",
          type: "ThrowStatement",
        },
      ],
    },
    {
      code: "function foo() { bar().then(() => {}).catch(() => { throw new Error(); }); }",
      errors: [
        {
          message: "unchained promise handlers should not throw errors",
          type: "ThrowStatement",
        },
      ],
    },
    {
      code: "function foo() { bar().catch(() => {}).then(() => { throw new Error(); }); }",
      errors: [
        {
          message: "unchained promise handlers should not throw errors",
          type: "ThrowStatement",
        },
      ],
    },
    {
      code: "function foo() { bar().catch(() => {}).catch(() => { throw new Error(); }); }",
      errors: [
        {
          message: "unchained promise handlers should not throw errors",
          type: "ThrowStatement",
        },
      ],
    },
  ],
});
