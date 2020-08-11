var foo = function () {

  console.log('foo1');

}

foo();  // foo1

var foo = function () {

  console.log('foo2');

}

foo(); // foo2


// js引擎并非一行一行的分析和执行结果， 是一段一段的执行， 当执行一段结果的时候
// 会进行一个‘准备工作’
function foo() {

  console.log('foo1');

}

foo();  // foo2

function foo() {

  console.log('foo2');

}

foo(); // foo2