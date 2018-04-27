# No arguments assignment (no-args-assignment)

It fails when arguments are reassigned.

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
