
Function.prototype.myCall = function(context, ...args) {
  // node环境下没有window
  // var context = context || window
  context.fn = this
  const results = context.fn(...args)
  context.fn()
  delete context.fn
  return results
}

Function.prototype.myBind = function(context) {
  return () => {
    this.myCall(context)
  }
}

let foo = {
  value: 1
}

function bar(name, age) {
  return {
    name
  }
}

bar.myBind(foo, 'kevin', 18)()
