// 原型链继承：子类的原型继承父类的实例，从而能够获取父类的方法和属性
// 缺点：子类不能向父类传参、一变万变，复用性不高
function Parent(name) {
  this.name = name
}
Parent.prototype.getName = function() {
  return this.name
}
function Child() {}
// 子类的原型指向父类的实例，这样子类可以向上寻找
Child.prototype = new Parent('haha')
// 子类实例就能继承父类以及原型上的方法
const child = new Child()
console.log(child.getName());

// 构造函数：在子类的构造函数中执行父类的构造函数，并绑定this
// 缺点： 继承不到父类原型上的属性和方法
function Child1(name) {
  Parent.call(this, name)
}

const child1 = new Child1('mlz')
const child2 = new Child1('pyc')

console.log(child1.name, child2.name);

// 组合继承
// 缺点：每次创建子类实例都执行了两次构造方法
function Parent2(name) {
  this.name = name
}

Parent2.prototype.getName2 = function() {
  console.log(this.name);
}

function Child2() {
  Parent2.call(this, 'mlz')
}

// Child2.prototype = new Parent2()
// 寄生式继承
// Child2.prototype = Parent2.prototype
// 进行寄生式继承浅拷贝
Child2.prototype = Object.create(Parent2.prototype)

let child3 = new Child2()
// let child4 = new Child2('lala')
let parent = new Parent2()
parent.getName2()
child3.getName2()

// console.log(child3.name, child4.name);

// 寄生组合继承：在组合继承上将指向父类实例改成指向父类原型
// 子类原型和父类原型指向的是同一对象，对子类原型操作会影响到父类，进行浅拷贝


