
# h2dom

> Create DOM nodes using h functions

_**NOTICE** This is not a patch function, it simply creates DOM nodes._

## Example

```js
var node = h('div', { class: 'foo' }, [
  h('span', null, 'foo'),
  ' bar'
])

document.body.appendChild(node)
```

## Install

```
npm i h2dom
```

## Usage

### `h(tag, data?, children?)`

[This function follows the h2spec guidelines.](https://github.com/hyper2/h2spec)

+ `tag`: the element name passed to `document.createElement(name)`
+ `data` (optional): an object containing the attributes to set on the element
+ `children` (optional): an array of DOM nodes or primitive values to be listed under `element.childNodes`
