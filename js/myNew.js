function myNew(foo, ...args) {
  // 1、创建新对象，并继承构造方法foo的原型和属性
  let obj = Object.create(foo.prototype)
  // 2、执行构造方法，并绑定新的this，能够有this.name = name这样的操作
  let result = foo.apply(obj, args)
  // 3、返回新实例，如果构造方法已经返回了一个对象，那就返回这个对象，否则返回我们新创建的obj
  Object.prototype.toString.call(result)==='[object Object]' ? result : obj
}
function Foo(name) {
  this.name = name
}

const newObj = myNew(Foo, 'hello')
console.log(newObj);