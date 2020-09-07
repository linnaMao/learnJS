function Parent(age, name) {
  this.name = name
  this.age = age
  this.sayName = function() {
    console.log(this.name);
  }
}

Parent.prototype.sayAge = function() {
  console.log(this.age);
}

function New(foo, ...args) {
  // 创建一个空对象
  let obj = {}
  // 找到这个构造函数
  // 将空对象的原型链指向构造函数的原型
  obj.__proto__ = foo.prototype
  // 将空对象原型链的constructor指向构造函数
  obj.__proto__.constructor = foo
  // 将构造函数的this指向这个空对象
  let result = foo.apply(obj, args)
  // 返回空对象
  return typeof result === 'object' ? result : obj
}

// let son = new Parent(18, 'linna')
let newSon =  New(Parent, 18, 'linna')
newSon.sayAge() 

// function myNew(foo) {
//   var obj = {}
//   obj._proto_ = foo.prototype
//   foo.apply(this, arguments)
//   return obj 
// }

