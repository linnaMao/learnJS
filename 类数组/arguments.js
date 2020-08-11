// 不是在严格模式下，传入参数的前提下，实参和arguments的值回共享

// function foo(name, age, sex, hobbit) {

//   console.log(name, arguments[0]); // name name

//   // 改变形参
//   name = 'new name';

//   console.log(name, arguments[0]); // new name new name

//   // 改变arguments
//   arguments[1] = 'new age';

//   console.log(age, arguments[1]); // new age new age

//   // 测试未传入的是否会绑定
//   console.log(sex); // undefined

//   sex = 'new sex';

//   console.log(sex, arguments[2]); // new sex undefined

//   arguments[3] = 'new hobbit';

//   console.log(hobbit, arguments[3]); // undefined new hobbit

// }

// foo('name', 'age')


// 传递参数
function foo(a, b, c) {
  console.log(a, b,c);
}

function bar(...arg) {
  // foo.apply(this, arguments)
  console.log(arg);
}

bar(1,2,3)