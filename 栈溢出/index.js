// function runStack(n) {
//   if (n === 0) return 100;
//   return runStack(n - 2);
// }
// runStack(50000)

// 1不用递归，用循环
// function runStack(n) {
//   if (n > 0) {
//     n = n -2
//   }
//   return 100
// }
// console.log(runStack(50000));

// 2用定时器
// function runStack(n) {
//   if (n === 0) return 100;
//   setTimeout(function() {
//     return runStack(n - 2)
//   }, 0);
// }
// console.log(runStack(50000));

// 3、generate

// function *runStack(n) {
//   if (n > 0) {
//     yield *runStack(n - 2)
//   }
//   return 100
// }

// let run = runStack(50000)
// console.log(run.next());