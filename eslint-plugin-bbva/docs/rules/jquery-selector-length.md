# jQuery selector length (jquery-selector-length)

Once you've made a selection, you typically want to know whether it actually found anything. 
Since selectors always return an object (the set of selected DOM elements), the best way to see whether your selection found anything is to test the returned object's `.length` property.

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
