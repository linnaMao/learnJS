var name = "World";
// (function() {
//     if(name === undefined) {;
//       var name = 'MLZ';
//       console.log("byebye " + name)
//     } else {
//       console.log('hello ' + name)
//     }
//   }
// )()

// // 因为变量提升的问题如下，利用let让它成为块级作用域可以改变结果
// function foo() {
//   return function() {
//     console.log(name)
//     if(name === undefined) {
//       let name = 'MLZ';
//       console.log("byebye " + name)
//     } else {
//       console.log('hello ' + name)
//     }
//   }
// }
// foo()()

// function foo() {
//   let a = 2
//   function bar() {
//     console.log(a);
//   }

//   baz(bar)
// }

// function baz(fn) {
//   fn()
// }

// foo()


// let fn
// function foo() {
//   let a = 3
//   function bar() {
//     console.log(a)
//   }
//   fn = bar
// }

// function baz() {
//   fn()
// }

// foo()
// baz()

// function foo() {
//   let a = 4;
//   return function bar() {
//     console.log(a)
//   }
// }

// foo()()

// (function() {
//   let a = 1
//   console.log(a)
// })()

var data = [];

for (var i = 0; i < 3; i++) {
    data[i] = (
      function(i) {
        return function() {
          console.log(i);
        }
      }
  )(i)
}
// arguments的callee解决闭包问题
// for (var i = 0; i < 3; i++) {
//   (data[i] = function() {
//     console.log(arguments.callee.i);
//   }).i = i
// }




// data[0]();
// data[1]();
// data[2]();


