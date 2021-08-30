# Avoid throwing errors in unchained promise handlers (no-throw-in-unchained-promise)

In some rare cases, promise handling can occur on multiple different code paths. This rule tries to avoid rejected promises happening in any non primary path, by checking that the `then` or `catch` handling functions that contain a `throw` are returned or asigned to a variable that might be returned.

## Rule Details

Examples of **incorrect** code for this rule:

```js
function foo() {
  bar().then(() => {
    throw new Error();
  });
}

function foo() {
  bar().then(..., () => {
    throw new Error();
  });
}

function foo() {
  bar().catch(() => {
    throw new Error();
  });
}
```

Examples of **correct** code for this rule:

```js
function foo() {
  return bar().then(() => {
    throw new Error();
  });
}

function foo() {
  const response = bar().catch(() => {
    throw new Error();
  });

  return bar;
}
```

## Known limitations

This rule can only check that you are returning or storing the resulting promise in a variable, but cannot guarantee that it is correctly chained.
