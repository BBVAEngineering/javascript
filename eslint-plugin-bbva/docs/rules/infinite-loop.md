# Infinite loop (infinite-loop)

It fails when detects a for loop with a possible infinite cycle.

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
