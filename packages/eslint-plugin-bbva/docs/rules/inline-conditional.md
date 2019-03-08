# Inline conditional (inline-conditional)

It fails when a condition is writen in a single line without a return statement.
Even when it is not, it could confuse future maintainers of the code, and should be avoided.

## Rule Details

Examples of **incorrect** code for this rule:

```js
foo && foo();
```

Examples of **correct** code for this rule:

```js
if (foo) {
  foo();
}

function bar() {
  return foo && foo();
}
```
