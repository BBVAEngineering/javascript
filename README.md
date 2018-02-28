# BBVA Javascript

Javascript style guide inspired in [Airbnb](https://github.com/airbnb/javascript) rules

## Table of Contents

  1. [Editorconfig](#editorconfig)
  1. [Babel](#babel)
  1. [ESlint](#eslint)
  1. [JSBeautify](#jsbeautify)
  1. [Possible errors](#possible-errors)

## Editorconfig

EditorConfig helps developers define and maintain consistent coding styles between different editors and IDEs.

- Tabs must be used to indent instead of spaces.

- Use 1 tab to indent the code.

- Use "lf" char at end of line.

- UTF-8 charset.

- Remove white spaces at the end of the line.

- Last line must be blank.

**[⬆ back to top](#table-of-contents)**

## Babel

Babel allows you to use ES6 features in your projects and then compiles ES5 for you to use in production.

All code must be written using babel ES6 rules. Get more ES6 info [here](https://babeljs.io/docs/learn-es2015/).

- Arrows and Lexical This

- Classes

- Template Strings

- Default + Rest + Spread

- Let + Const

- Iterators + For..Of

- Generators

- Modules

- And much [more...](https://babeljs.io/docs/learn-es2015/)

**[⬆ back to top](#table-of-contents)**

## ESlint

[ESLint](http://eslint.org/) is an open source project, It's goal is to provide a pluggable linting utility for JavaScript.

This rules are optimized for [ECMAScript 2015](http://www.ecma-international.org/ecma-262/6.0/) and eslint versions ^3.0.0.

You can check the rules for BBVA eslint in this [link](/eslint-config-bbva).

### Usage

- `npm install --save-dev eslint-config-bbva eslint`.
- add `"extends": "bbva"` to your .eslintrc.js file in your project.

**[⬆ back to top](#table-of-contents)**

## JSBeautify

This little [beautifier](https://github.com/beautify-web/js-beautify) will reformat and reindent bookmarklets, ugly JavaScript, unpack scripts packed by Dean Edward’s popular packer, as well as deobfuscate scripts processed by [javascriptobfuscator](javascriptobfuscator.com).

**[⬆ back to top](#table-of-contents)**

## Possible errors

  1. Do not use console statements. When using Ember it's recommended to log with the Object [Ember.Logger](http://emberjs.com/api/classes/Ember.Logger.html)

  > Why? messages are considered to be for debugging purposes and therefore not suitable to ship to the client.

  ```javascript
  Ember.Logger.log('Hey!');
  ```

  1. Trailing commas are not valid. eslint: [`comma-dangle`](http://eslint.org/docs/rules/comma-dangle)

    > Why? In some browsers trailing commas can throw an error.

    ```javascript
    // bad
    var foo = {
        bar: ":)",
    };
    var wow = [1,2,];

    // good
    var foo = {
        bar: ":)"
    };
    var wow = [1,2];
    ```

**[⬆ back to top](#table-of-contents)**

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/BBVAEngineering/javascript/tags).

## Authors

See the list of [contributors](https://github.com/BBVAEngineering/javascript/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
