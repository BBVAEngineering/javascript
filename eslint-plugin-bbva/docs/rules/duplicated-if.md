# Duplicated if (duplicated-if)

It fails when condition or block is repeated in the different the branches.

## Rule Details

Examples of **incorrect** code for this rule:

```js
if (a === 1) {
	foo();
} else if (a === 2) {
	foo();
} else if (a === 1) {
	foo();
}
```

Examples of **correct** code for this rule:

```js
if (a === 1) {
	foo();
} else if (a === 2) {
	bar();
} else if (a === 3) {
	wow();
}
```
