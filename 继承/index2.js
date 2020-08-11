// 原型链继承
// 方法会被所有实例共享
// 创建实例的时候不能向超类构造函数赋值
// function Parent(name) {
//   this.name = name
// }

// Parent.prototype.getName = function() {
//   console.log('my name is ' + this.name);
// }

// function Son() {
//   this.name = 'lina'
// }

// Son.prototype = new Parent()
// let son = new Son()
// son.getName()

// let son1 = new Son()
// son1.getName()

// 组合继承：在子类内部调用超类构造函数
// 解决了原型链继承的缺陷
// 方法在函数内部定义，没有复用性
// 每次创建一次实例，方法也会被重新创建

// function Parent(name) {
//   this.name = name
//   this.getName = function() {
//     console.log('my name is ' + this.name);
//   }
// }

// function Son(name) {
//   Parent.call(this, name)
// }

// let son = new Son('lina')
// son.getName()

// let son1 = new Son('pyc')
// son1.getName()

// 组合继承：利用原型链实现对原型属性和方法的继承，利用借用构造函数实现对实例属性的继承
// 结合了原型链继承和借用构造函数的优点
// 但是需要调用两次父类。带来性能上的损耗

function Parent(name, age) {
  this.name = name
  this.age = age
  this.getName = function() {
    console.log('my name is ' + this.name);
  }
}

Parent.prototype.getAge = function() {
  console.log('my age is ' + this.age);
}

function Son(name) {
  Parent.call(this, name)
  this.age = 18
}


Son.prototype = new Parent()
let parent = new Parent('pyc', 20)
parent.getName()
parent.getAge()

let son = new Son('lina')
son.getName()
son.getAge()

