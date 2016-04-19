# BBVA Javascript
Javascript style guide inspired in [Airbnb](https://github.com/airbnb/javascript) rules

## Table of Contents

  1. [Editorconfig](#editorconfig)
  1. [Babel](#babel)
  1. [JSBeautify](#jsbeautify)
  1. [Possible errors](#possible-errors)


## Editorconfig

EditorConfig helps developers define and maintain consistent coding styles between different editors and IDEs.

<a name="editorconfig--indent-style"></a><a name="2.1"></a>
- [1.1](#editorconfig--indent-style) Tabs must be used to indent instead of spaces.

<a name="editorconfig--indent-size"></a><a name="2.1"></a>
- [1.2](#editorconfig--indent-size) Use 1 tab to indent the code.

<a name="editorconfig--end-of-line"></a><a name="2.1"></a>
- [1.3](#editorconfig--end-of-line) Use "lf" char at end of line.

<a name="editorconfig--charset"></a><a name="2.1"></a>
- [1.4](#editorconfig--charset) UTF-8 charset.

<a name="editorconfig--trailing-whitespace"></a><a name="2.1"></a>
- [1.5](#editorconfig--trailing-whitespace) Remove white spaces at the end of the line.

<a name="editorconfig--final-line"></a><a name="2.1"></a>
- [1.7](#editorconfig--final-line) Last line must be blank.

**[⬆ back to top](#table-of-contents)**

## Babel

Babel allows you to use ES6 features in your projects and then compiles ES5 for you to use in production.

We currently use [babel-eslint](https://github.com/babel/babel-eslint) to lint all es6 code.

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
