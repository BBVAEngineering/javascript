# No arguments assignment (no-args-assignment)

Arguments is used to access function arguments through indexed properties.
As a consequence, arguments should not be bound or assigned, because doing so would overwrite the original definitions of those two reserved words.

What's more, using either of those two names to assign or bind will generate an error in JavaScript strict mode code.

## Rule Details

Examples of **incorrect** code for this rule:

```js
function foo() {
	arguments[0] = 1;
}
```

Examples of **correct** code for this rule:

```js
function foo(data) {
  data = 1;
}
```
