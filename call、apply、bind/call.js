// 实现call
// 延展运算符既能延展，也能合并
// this传值可以为null，传null时候，指向全局对象
// 函数可以有返回值
Function.prototype.call1 = function (context, ...args) {
  // context = context || window
  context.fn = this
  const result = context.fn(...args)
  delete context.fn
  return result
}

value = 2

let foo = {
  value: 1
}

function bar(name, age) {
  console.log(this.value);
  return {
    value: this.value,
    name: name,
    age: age
  }
}

console.log(bar.call1(foo, 'kevin', 18));
