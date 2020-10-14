// 参数复用，降低通用性，提高适用性

// function add(a, b) {
//   return a + b
// }

// function curry(a) {
//   return function(b) {
//     return a + b
//   }
// }

// let a = curry(1)

// console.log(a(3));
// console.log(a(4));
// console.log(a(6));

// add(1)(2)(3) = 6;
// add(1, 2, 3)(4) = 10;
// add(1)(2)(3)(4)(5) = 15;

function add() {
  let args = [...arguments]
  let adder = function() {
    args.push(...arguments)
    return adder
  }
  adder.toString = function() {
    return args.reduce((a, b) => {
      return a + b
    })
  }

  return adder
}

console.log(add(1)(2)(3) == 6);


