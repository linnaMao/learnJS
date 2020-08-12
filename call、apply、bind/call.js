// 实现call
// 延展运算符既能延展，也能合并
// this传值可以为null，传null时候，指向全局对象
// 函数可以有返回值

// 1、将函数设为对象的属性
// 2、执行函数
// 3、删除函数
Function.prototype.myCall = function(context, ...args) {
  // node环境下没有window
  // var context = context || window
  console.log(args);
  context.fn = this
  const results = context.fn(...args)
  context.fn()
  delete context.fn
  return results
}

var foo = {
  value: 1
}

function bar(name) {
  console.log(this.value, name);
}


bar.myCall(foo, 'haha', 18)


 