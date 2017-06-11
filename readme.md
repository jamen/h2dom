
# h2dom

> Create DOM nodes from h()

An [h2spec `h()` function](https://github.com/hyper2/h2spec) made for creating DOM nodes:

```js
var node = h('div', { class: 'foo bar' }, [
  h('span', 'hello world'),
  ' foobar'
])

document.body.appendChild(node)
```

## Install

```sh
npm i h2dom
```

## Usage

### `h(tag, data?, children?)`

A `h()` function specified in [h2spec](https://github.com/hyper2/h2spec)

 - `tag` is an element name passed to `doucment.createElement(name)`
 - `data` is attributes to set on the element
 - `children` is [_primitive values (strings, numbers, etc.)_ or the DOM node](https://github.com/hyper2/h2spec#call-sequence)

```js
var node = h('p', { class: 'test' }, 'hello world')
// <p class='test'>hello world</p>

document.body.appendChild(node)
```

