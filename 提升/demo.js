// 函数声明提升

// function foo() {
//   var a
//   console.log(a)
//   a = 1
// }

// foo()

// 函数表达式不会提升

// var foo

// foo()

// foo = function() {
//   var a
//   console.log(a)
//   a = 1
// }



// 变量提升，函数优先


function foo() {
  console.log('foo')
}

foo()

function foo() {
  console.log('foo1');
}

foo()



 











 


// foo = () => {
//   console.log('2')
// };



