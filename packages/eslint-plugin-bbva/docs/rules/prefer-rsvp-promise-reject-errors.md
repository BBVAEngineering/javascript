# Require using Error objects as RSVP Promise rejection reasons (prefer-rsvp-promise-reject-errors)

This rule complements the `prefer-promise-reject-errors` by enforcing the usage of instances of the `Error` object as arguments of the RSVP `reject()` function.

## Rule Details

Examples of **incorrect** code for this rule:

```js
import RSVP, { reject } from "rsvp";

RSVP.reject("something bad happened");

reject(5);

reject();
```

Examples of **correct** code for this rule:

```js
import RSVP, { reject } from "rsvp";

RSVP.reject(new Error("something bad happened"));

RSVP.reject(new TypeError("something bad happened"));

const err = new Error("something bad happened");
reject(err);

const foo = getUnknownValue();
reject(foo);
```

## Known limitations

This rule cannot guarantee the values used are instance of the `Error` object, just when the values are created using the `new` operator. The rule won't trigger in any other doubtful cases, for example when the object is not an instance of `Error` or the value is not initialized in the surrounding context and the type cannot be checked.

## Further reading

- [`rsvp`](https://github.com/tildeio/rsvp.js/)
- [`prefer-promise-reject-errors`](https://eslint.org/docs/rules/prefer-promise-reject-errors)
