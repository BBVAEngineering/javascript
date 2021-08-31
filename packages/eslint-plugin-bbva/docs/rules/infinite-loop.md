# Infinite loop (infinite-loop)

It is almost always an error when a for loop's stop condition and incrementer don't act on the same variable.
Even when it is not, it could confuse future maintainers of the code, and should be avoided.

## Rule Details

Examples of **incorrect** code for this rule:

```js
for (let i = 0; i < 10; j++) {
  // ...
}
```

Examples of **correct** code for this rule:

```js
for (let i = 0; i < 10; i++) {
  // ...
}
```
