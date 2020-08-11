Function.prototype.apply1 = function(context, args) {
  context.fn = this
  const result = context.fn(...args)
  delete context.fn
  return result
}


const foo = {
  value: 1
}

function bar(name, age) {
  // console.log(this.value, name, age);
  return {
    value: this.value,
    name: name,
    age: age
  }
}

console.log(bar.apply1(foo, ['kevin', 18]));