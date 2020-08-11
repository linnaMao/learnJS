// 使用let, 外部let引用不了for里面的let，因为块级作用域的原因
 for (let i = 0; i < 3; i++) {
   console.log(i); 
 }

console.log(i);

// babel转换后

for (var _i = 0; _i < 3; _i++) {
  console.log(_i);
}
console.log(i);

// 使用es5,使用闭包的形式，在外层增加一层匿名作用域
(function() {
  for (var i = 0; i < 3; i++) {
    console.log(i);
  }
})()
console.log(i);