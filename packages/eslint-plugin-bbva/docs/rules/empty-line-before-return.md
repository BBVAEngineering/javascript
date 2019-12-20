# Empty line before return statements (empty-line-before-return)

`return` statements should be preceded with an empty line, unless they are the only sentence in a statement block.

## Rule Details

Examples of **incorrect** code for this rule:

```js
function foo() {
  // ... code ...
  return true;
}

function foo() {
  if (/* condition */) {
    // ... code ...
    return true;
  }
}
```

Examples of **correct** code for this rule:

```js
function foo() {
  return true;
}

function foo() {
  // ... code ...

  return true;
}

function foo() {
  if (/* condition */) {
    return true;
  }
}

function foo() {
  if (/* condition */) {
    // ... code ...

    return true;
  }
}

function foo() {
  if (/* condition */)
    return true
}
```