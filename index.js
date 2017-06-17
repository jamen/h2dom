
module.exports = function h2dom (tag, data, children) {
  if (!children && (typeof data !== 'object' || Array.isArray(data))) {
    children = data
    data = null
  }

  // Create DOM node
  var node = document.createElement(tag)

  // Set attributes
  for (var attr in data) {
    if (data[attr]) {
      node.setAttribute(attr, data[attr])
    } else {
      node.removeAttribute(attr)
    }
  }

  // Add children nodes
  if (typeof children === 'string') {
    node.appendChild(document.createTextNode(children))
  } else if (children != null) {
    for (var i = 0, max = children.length; i < max; i++) {
      node.appendChild(h2dom(children[i]))
    }
  }

  return node
}
