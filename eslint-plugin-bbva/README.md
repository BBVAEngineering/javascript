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
    "plugins": [
        "bbva"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "bbva/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





