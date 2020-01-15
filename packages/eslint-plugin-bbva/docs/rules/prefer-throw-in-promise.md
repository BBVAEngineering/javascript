# Prefer throwing errors in promise handler functions (prefer-throw-in-promise)

Prefer throwing `Error` instances instead of returning a new rejected promise to reject a promise chain.

## Rule Details

Examples of **incorrect** code for this rule:

```js
foo().then(() => {
  return reject();
});

foo().then(..., () => {
  return reject();
});

foo().catch(() => {
  return reject();
});

async function foo() {
  try {
    return reject();
  } catch (e) {
    // ...
  }
}

async function foo() {
  try {
    // ...
  } catch (e) {
    return reject();
  }
}
```

Examples of **correct** code for this rule:

```js
foo().then(() => {
  throw new Error();
});

foo().then(..., () => {
  throw new Error();
});

foo().catch(() => {
  throw new Error();
});

async function () {
  try {
    // ...
  } catch (e) {
    throw new Error();
  }
}

function foo() {
  try {
    // ...
  } catch (e) {
    return reject();
  }
}
```

## Known limitations

This rule cannot guarantee this behaviour, for example if the rejected promise is created in another function that is called in the promise handler.
