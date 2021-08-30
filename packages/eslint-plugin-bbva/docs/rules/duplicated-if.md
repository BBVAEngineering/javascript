# Duplicated if (duplicated-if)

A switch and a chain of if/else if statements is evaluated from top to bottom.
At most, only one branch will be executed: the first one with a condition that evaluates to true.

Therefore, duplicating a condition automatically leads to dead code. Usually, this is due to a copy/paste error.
At best, it's simply dead code and at worst, it's a bug that is likely to induce further bugs as the code is maintained, and obviously it could lead to unexpected behavior.

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
