// 原型链继承
// 引用类型被所有实例共享;创建实例的时候，不能向Parent传参

// function Parent(name) {
//   this.name = ['red', 'green']
// }

// // Parent.prototype = {
// //   getName: function() {
// //     console.log('my name id ' + this.name);
// //   }
// // }

// function Child() {

// }

// Child.prototype = new Parent('linnaMao')

// const child = new Child()
// child.name.push('blue')
// const child1 =new Child()

// console.log(child.name, child1.name);

// 借用构造函数
// 避免了引用类型的属性内所有实例共享
// 可以向Child中向Paren传参
// 
// function Parent(name) {
//   this.name = ['red', 'blue']
// }

// function Child() {
//   Parent.call(this)
// }

// const child = new Child()
// child.name.push('green')
// console.log(child.name);
// const child1 = new Child()
// console.log(child1.name);

// 组合继承

function Parent(name) {
  this.name = name
}

Parent.prototype.getName = function() {
  console.log('hello ' + this.name);
}

function Child(name, age) {
  Parent.call(this, name)
  this.age = age
}

Child.prototype.getAge = function() {
  console.log('I am ' + this.age + ' years old');
}

Child.prototype = new Child()
Child.prototype.constructor = Child

const child = new Child('linna', 18)
// child.getAge()
// console.log(child);