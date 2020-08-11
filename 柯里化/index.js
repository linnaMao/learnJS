// 参数复用，降低通用性，提高适用性

function add(a, b) {
  return a + b
}

let addCurry = curry(add)

addCurry(1)(2)