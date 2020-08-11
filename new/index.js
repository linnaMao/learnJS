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

function New() {
  // 创建一个空对象
  let obj = {}
  // 找到这个构造函数
  let Father = [].shift.call(arguments)
  // 将空对象的原型链指向构造函数的原型
  obj._proto_ = Father.prototype
  // 将空对象原型链的constructor指向构造函数
  obj._proto_.constructor = Father
  // 将构造函数的this指向这个空对象
  Father.apply(obj, arguments)
  // 返回空对象
  return obj
}

let son = new Parent(18, 'linna')
let newSon =  New(Parent, 18, 'linna')
son.sayAge()
// newSon.sayAge()

