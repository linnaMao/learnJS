// 要求1秒后输出0，1，2
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// } // 3，3，3

// let在for括号中建立了隐藏作用域
// for (let i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

// 闭包
// for (var i = 0; i < 3; i++) {
//   (
//     function(i) {
//       setTimeout(() => {
//         console.log(i);
//       }, 1000)
//     }
//   )(i)
// }

// 第三个参数

for (var i = 0; i < 3; i++) {
  setTimeout((i) => {
    console.log(i);
  }, 1000, i);
}


