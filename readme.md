# Quartic.js

> JavaScript library for solving quartic equations.

## Install

```bash
$ npm install quartic
```

### Usage

Pass an array of the 5 coefficients of equation to solve, from the `x^4` term down to the constant term.

The results are returned as [Math.js][mathjs] complex number objects, with `re` and `im` properties that hold the real and imaginary part of the complex root respectively.

```js
var quartic = require('quartic');

var coefficients = [5, 4, 3, 2, 1];
var roots = quartic(coefficients);

console.log(roots);
```

## Get the code

```bash
$ git clone https://github.com/lavelle/quartic
$ cd quartic
$ npm install
$ make test
```

## License

MIT

[mathjs]: http://mathjs.org/
