# jQuery selector length (jquery-selector-length)

It fails when a conditional check a jQuery selector without checking the length property.

## Rule Details

Examples of **incorrect** code for this rule:

```js
if ($('#foo')) {
	// ...
}
```

Examples of **correct** code for this rule:

```js
if ($('#foo').length) {
	// ...
}
```
