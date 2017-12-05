# h2dom
> Create DOM nodes from h()

An [h2spec `h()` function](https://github.com/hyper2/h2spec) made for creating DOM nodes.

```js
var node = h('div', { class: 'foo' }, [
  h('span', null, [ 'foo' ]),
  ' bar'
])

document.body.appendChild(node)
```

## usage
[![NPM](https://nodei.co/npm/h2dom.png?mini)](https://www.npmjs.com/package/h2dom)

### `h2dom(tag, data?, children?)`
A `h()` function specified in [h2spec](https://github.com/hyper2/h2spec).

* `tag`: the element name passed to `document.createElement(name)`
* `data` (optional): an object containing the attributes to set on the element
* `children` (optional): an array of DOM nodes or primitive values to be listed under `element.childNodes`
