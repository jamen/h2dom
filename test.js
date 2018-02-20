var test = require('tape')
var h = require('./')

test('creates DOM node', function (t) {
  t.plan(1)

  var node = h('div', { class: 'foo' }, [
    h('span', null, 'foo'),
    ' bar'
  ])

  t.true(node, 'got something')

  console.log(node)
  document.body.appendChild(node)
})
