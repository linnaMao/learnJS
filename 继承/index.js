// 原型链继承
// 方法会被所有实例共享
// 创建实例的时候不能向超类构造函数赋值
// function Father(name) {
//   this.name = name
// }

// Father.prototype.getName = function() {
//   console.log('father ' + this.name);
// }

// function Son() {
//   this.name = 'xixi'
// }

// Son.prototype = new Father()

// const son = new Son()
// const son1 = new Son()
// son.getName()
// son1.getName()

// 借用构造函数：在子类内部调用超类构造函数
// 解决了原型链继承的缺陷
// 方法在函数内部定义，没有复用性
// 每次创建一次实例，方法也会被重新创建，并且不能访问到父构造函数原型上的属性和方法

// function Father(name, sex) {
//   this.name = name
//   this.sex = sex
//   this.getName = function() {
//     console.log('father ' + this.name);
//   }
// }

// Father.prototype.getSex = function() {
//   console.log(this.sex);
// }

// function Son(name, sex) {
//   Father.call(this, name, sex)
// }

// const son = new Son('haha')
// const son1 = new Son('xixi')
// son.getName()
// son1.getName()

// 组合继承：利用原型链实现对原型属性和方法的继承，利用借用构造函数实现对实例属性的继承
// 结合了原型链继承和借用构造函数的优点
// 但是需要调用两次父类。带来性能上的损耗

// function Father(name, sex) {
//   this.name = name
//   this.sex = sex
//   this.getName = function() {
//     console.log('father ' + this.name);
//   }
// }

// Father.prototype.getSex = function() {
//   console.log('father ' + this.sex);
// }

// function Son(name, sex) {
//   Father.call(this, name, sex)
// }

// Son.prototype = new Father()
// const son = new Son('haha', 'man')
// const son1 = new Son('xixi', 'man')
// son.getName()
// son.getSex()


// 寄生式继承：优化组合继承，组合继承再继承父类函数的时候调用了构造函数
// 利用Object.create创建中间对象


// function create(pro) {
//   function F() {}
//   F.prototype = pro

//   return new F()
// }

// function Father(name, sex) {
//   this.name = name
//   this.sex = sex
//   this.getName = function() {
//     console.log('father ' + this.name);
//   }
// }

// Father.prototype.getSex = function() {
//   console.log('father ' + this.sex);
// }

// function Son(name, sex) {
//   Father.call(this, name, sex)
// }

// Son.prototype = new Father()
// 比起组合继承优化点：避免Father函数内部方法重复执行
// Son.prototype = Object.create(Father.prototype)
// const son = new Son('haha', 'man')
// const son1 = new Son('xixi', 'man')
// son.getName()
// son.getSex()

function Father(name) {
  this.name = name
  this.getName = function() {
    console.log(this.name);
  }
}

// Father.prototype.getName = function() {
//   console.log(this.name);
// }

function Son(name) {
  Father.call(this, name)
}


let son = new Son('hah')

son.getName()


function Father(name) {
  this.name = name
}

Father.prototype.getName = function() {
  console.log(this.name);
}

function Son() {

}

Son.prototype = new Father()

let son = new Son()



