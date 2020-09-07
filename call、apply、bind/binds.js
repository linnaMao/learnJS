
Function.prototype.myCall = function(context, ...args) {
  // node环境下没有window
  // var context = context || window
  context.fn = this
  const results = context.fn(...args)
  context.fn()
  delete context.fn
  return results
}

Function.prototype.myBind = function(context, ...args) {
  const that = this
  return () => {
    return that.myCall(context, ...args)
  }
}

let foo = {
  value: 1
}

function bar(name, age) {
  return {
    name,
    age
  }
}

console.log(bar.myBind(foo, 'kevin', 18)());
