// Object.getPrototypeOf()：用来获取对象的原型

// 原型继承
// function Father() {
//   this.name = "father";
//   this.eat = function() {
//     console.log(this.name + " eat hamburg");
//   }
// }

// function Children() {
//   this.name = "children"
// }

// Children.prototype = new Father();
// const children = new Children();
// children.eat(); //children eat hamburg


// 组合继承
// function Super(name) {
//   this.name = name;
//   this.eat = ["吃", "喝", "嚼"];
//   this.sayName = function() {
//     console.log(this.name);
//   }
// }

// function Sub(name, age) {
//   this.age = age;
//   Super.call(this, name);
//   this.sayAge = function() {
//     console.log(this.age)
//   }
// }

// Sub.prototype = new Super();
// const sub = new Sub("PYC", "27");
// sub.eat.push("吞");
// console.log(sub.eat);
// sub.sayName();
// sub.sayAge();

// const sub1 = new Sub("MLZ", "18");
// console.log(sub1.eat);
// sub1.sayName();
// sub1.sayAge();



// function Father() {
//   this.name = 'father'
//   this.age = function() {
//     console.log(this.name + ' 18 years old')
//   }
// }

// function Son() {
//   this.name = 'son'
// }


// Son.prototype = new Father()
// const son = new Son()
// const father = new Father()
// son.name = 'mlz'
// father.age()
// son.age()

// function Father() {
//   this.name = 'linna'
//   this.age  = function() {
//     console.log(this.name + ' is 18 years old')
//   }
// }

// function Son() {
//   this.name = 'mlz'
// }

// Son.prototype = new Father()
// const son = new Son()
// son.age()

function Dog(name, color) {
  this.name = name
  this.color = color
  this.bark = () => {
      console.log(name + ' wangwang~')
  }
}

const dog1 = new Dog('dog1', 'black')
const dog2 = new Dog('dog2', 'white')