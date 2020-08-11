// 工厂模式
// 对象无法识别，因为所有的实例都指向一个原型

function createPerson(name) {
  const o = new Object()
  o.name = name
  o.getName = function() {
    console.log('my name is ' + this.name);
  }
  return o
}

const person1 = createPerson('mlz')
person1.getName()

// 构造函数模式
// 每次创建实例，方法都要被创建一次
function Person(name) {
  this.name = name
  this.getName = function() {
    console.log('my name is ' + this.name);
  }
}

const person2 = new Person('mlz')
person2.getName()

// 原型模式
// 方法不会被重建
// 所有的属性和方法都共享，不能初始化参数


function Person1(name) {

}

Person1.prototype = {
  constructor: Person1,
  name: 'mlz',
  getName: function() {
    console.log('my name is ' + this.name);
  }
}

const person3 = new Person1()
person3.getName()

// 组合模式

function Person2(name) {
  this.name = name
}

Person2.prototype = {
  constructor: Person2,
  getName: function() {
    console.log('my name is ' + this.name)
  }
}

const person4 = new Person2('mlz')
person4.getName()

// 寄生式函数模型