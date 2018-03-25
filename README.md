# array.partial [![Build Status](https://travis-ci.org/mrchief/array.partial.svg?branch=master)](https://travis-ci.org/mrchief/array.partial)

> Like array.some but with exclusivity

Useful when you need to determine "partially" selected states - like partially selecting tree nodes when some but not all child nodes are checked.

In fact, the idea originated while building a feature for my own [react-dropdown-tree-select](https://github.com/dowjones/react-dropdown-tree-select) component.

## Why

[array.some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some) returns true when _at least one_ element matches. [array.every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every) returns true when _all_ elements match. `array.some` will also return true when `array.every` returns true.

`array.partial` is something in between. It returns `true` **only, and only when** _some_ (but not all) elements match. If all elements match, then it'll return `false`.

This can also be achieved with `array.some && !array.every` if you don't mind iterating over the array twice. This module does it with one iteration over the array.

## Install

```
npm install array.partial
```

## Usage

```
const partial = require('array.partial')
partial(array, callback)
```

## API

### partial(array, callback)

#### array

Type: `Array` - Input array

#### callback

Type: `Function` - Function is a predicate, to test each element of the array. This is called with same arguments as [array.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

## Examples

```
const partial = require('array.partial')

const myArr = [{id: 'a1', checked: true}, {id: 'a2', checked: false}]
partial(myArr, x => x.checked)  // -> true

// ...

const myArr = [{id: 'a1', checked: true}, {id: 'a2', checked: true}]
partial(myArr, x => x.checked)  // -> false

// ...

const myArr = [{id: 'a1', checked: false}, {id: 'a2', checked: false}]
partial(myArr, x => x.checked)  // -> false
```

## License

MIT © [Hrusikesh Panda](https://about.me/hkpanda)
