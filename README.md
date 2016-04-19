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

All code must be writed using babel ES6 rules. Get more ES6 info [here](https://babeljs.io/docs/learn-es2015/).

- Arrows and Lexical This

- Classes

- Template Strings

- Default + Rest + Spread

- Let + Const

- Iterators + For..Of

- Generators

- Modules

- [And much more!](https://babeljs.io/docs/learn-es2015/

**[⬆ back to top](#table-of-contents)**

## ESlint

[ESLint](http://eslint.org/) is an open source project, It's goal is to provide a pluggable linting utility for JavaScript.

This rules are optimized for [ECMAScript 2015](http://www.ecma-international.org/ecma-262/6.0/) && eslint versions >2.4.

**[⬆ back to top](#table-of-contents)**

## JSBeautify

This little [beautifier](https://github.com/beautify-web/js-beautify) will reformat and reindent bookmarklets, ugly JavaScript, unpack scripts packed by Dean Edward’s popular packer, as well as deobfuscate scripts processed by [javascriptobfuscator](javascriptobfuscator.com).

**[⬆ back to top](#table-of-contents)**

## Possible errors

  <a name="possible-errors--prefer-const"></a><a name="2.1"></a>
  - [2.1](#possible-errors--prefer-const) Trailing commas are not valid. eslint: [`comma-dangle`](http://eslint.org/docs/rules/comma-dangle)

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

  <a name="possible-errors--no-cond-assign"></a><a name="2.2"></a>
  - [2.2](#possible-errors--no-cond-assign) Disallow assignment in conditional statements. eslint: [`no-cond-assign`](http://eslint.org/docs/rules/no-cond-assign)

    > Why? In conditional statements, it is very easy to mistype a comparison
    operator (such as ==) as an assignment operator (such as =).

**[⬆ back to top](#table-of-contents)**
