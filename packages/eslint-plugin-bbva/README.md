# eslint-plugin-bbva

BBVA eslint plugin

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-bbva`:

```
$ npm install eslint-plugin-bbva --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-bbva` globally.

## Usage

Add `bbva` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["bbva"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "bbva/duplicated-if": 2,
    "bbva/infinite-loop": 2,
    "bbva/inline-conditional": 2,
    "bbva/jquery-selector-length": 2,
    "bbva/no-args-assignment": 2,
    "bbva/useless-increment": 2
  }
}
```
