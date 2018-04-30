# Useless increment (useless-increment)

A value that is incremented or decremented and then not stored is at best wasted code and at worst a bug.

## Rule Details

Examples of **incorrect** code for this rule:

```js
j = j++;
```

Examples of **correct** code for this rule:

```js
j = ++j;
```
