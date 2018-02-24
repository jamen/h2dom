
function h2dom (tag, data, children) {
  var element = document.createElement(tag)
  for (var name in data) {
    var value = data[name]
    element[name] = value
    element.setAttribute(name, value)
  }
  if (children) {
    for (var i = 0; i < children.length; i++) {
      var child = children[i]
      if (typeof child === 'string') {
        child = document.createTextNode(child)
      }
      element.appendChild(child)
    }
  }
  return element
}

export { h2dom }
