"use strict";

const rule = require("../../../lib/rules/prefer-rsvp-promise-reject-errors");
const RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester({
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2015,
  },
});

ruleTester.run("prefer-rsvp-promise-reject-errors", rule, {
  valid: [
    "import { reject } from 'rsvp'; reject(new Error())",
    "import RSVP from 'rsvp'; RSVP.reject(new Error())",
    "import { reject } from 'rsvp'; var err = new Error(); reject(err)",
    "import RSVP from 'rsvp'; var err = new Error(); RSVP.reject(err)",
    "import { reject } from 'rsvp'; function abc(err) { reject(err); }",
    "import RSVP from 'rsvp'; function abc(err) { RSVP.reject(err) }",
    "import { reject } from 'rsvp'; var err = someFn(); reject(err)",
    "import RSVP from 'rsvp'; var err = someFn(); RSVP.reject(err)",
    "import { reject } from 'rsvp'; var err = true || false; reject(err)",
    "import RSVP from 'rsvp'; var err = true || false; RSVP.reject(err)",
    "import { reject } from 'rsvp'; var err = 1 + 1; reject(err)",
    "import RSVP from 'rsvp'; var err = 1 + 1; RSVP.reject(err)",
    "import { reject } from 'rsvp'; var err = true ? 1 : 2; reject(err)",
    "import RSVP from 'rsvp'; var err = true ? 1 : 2; RSVP.reject(err)",
    "import { reject } from 'rsvp'; reject(err)",
    "import alias from 'rsvp'; alias.reject(new Error())",
    "import { reject as alias } from 'rsvp'; alias(new Error())",
    "import { resolve } from 'rsvp'; Promise.reject()",
    "Promise.reject()",
  ],

  invalid: [
    {
      code: "import { reject } from 'rsvp'; reject()",
      errors: [
        {
          message: "Expected the RSVP Promise rejection reason to be an Error",
          type: "CallExpression",
        },
      ],
    },
    {
      code: "import RSVP from 'rsvp'; RSVP.reject()",
      errors: [
        {
          message: "Expected the RSVP Promise rejection reason to be an Error",
          type: "CallExpression",
        },
      ],
    },
    {
      code: "import { reject } from 'rsvp'; reject('foo')",
      errors: [
        {
          message: "Expected the RSVP Promise rejection reason to be an Error",
          type: "CallExpression",
        },
      ],
    },
    {
      code: "import { reject } from 'rsvp'; reject(42)",
      errors: [
        {
          message: "Expected the RSVP Promise rejection reason to be an Error",
          type: "CallExpression",
        },
      ],
    },
    {
      code: "import { reject } from 'rsvp'; reject(true)",
      errors: [
        {
          message: "Expected the RSVP Promise rejection reason to be an Error",
          type: "CallExpression",
        },
      ],
    },
    {
      code: "import { reject } from 'rsvp'; reject({ foo: 'bar' })",
      errors: [
        {
          message: "Expected the RSVP Promise rejection reason to be an Error",
          type: "CallExpression",
        },
      ],
    },
    {
      code: "import { reject } from 'rsvp'; const foo = 'bar'; reject(foo)",
      errors: [
        {
          message: "Expected the RSVP Promise rejection reason to be an Error",
          type: "CallExpression",
        },
      ],
    },
    {
      code: "import alias from 'rsvp'; alias.reject()",
      errors: [
        {
          message: "Expected the RSVP Promise rejection reason to be an Error",
          type: "CallExpression",
        },
      ],
    },
    {
      code: "import { reject as alias } from 'rsvp'; alias()",
      errors: [
        {
          message: "Expected the RSVP Promise rejection reason to be an Error",
          type: "CallExpression",
        },
      ],
    },
  ],
});
