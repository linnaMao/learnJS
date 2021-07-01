
// 1、2、8
// 宏任务 3 5
// 微任务 4
// 执行微任务 4
// 宏任务3
// 没有微任务 继续执行宏任务 5
// 6 微任务7
// 7
// console.log(1)

const { resolve } = require("path");

new Promise((resolve) => {
  console.log('2 :>> ', 2);
  setTimeout(() => {
    console.log('3 :>> ', 3);
  }, 0);
  resolve()
}).then(() => {
  console.log('4 :>> ', 4);
})

// new Promise((resolve, reject) => {
//   console.log(2)
//   setTimeout(() => {
//     console.log(3)
//   }, 0);
//   resolve()
// }).then(() => {
//   console.log(4)
//   new Promise((resolve) => {
//     console.log(12);
//     resolve()
//   }).then(() => {
//     console.log(11);
//   }).then(() => {
//     console.log(13);
//   })
// }).then(() => {
//   console.log(14);
// })

// setTimeout(() => {
//   console.log(5)
//   new Promise((resolve, reject) => {
//     console.log(6)
//     resolve()
//   }).then(() => {
//     console.log(7)
//   })
// }, 0);

// console.log(8)

// console.log('script start')
// async function async1(){
//   console.log('async1 start')
//   await async2()
//   console.log('async1 end')
//   console.log('async1 end1');
// }
// async function async2(){
//   console.log('async2')
// }     
// setTimeout(function(){
//   console.log('setTimeout') 
// },0)  
// async1();
// new Promise(function(resolve){
//   console.log('promise1')
//   resolve();
// }).then(function(){
//   console.log('promise2')
// })
// console.log('script end')

// class Sleep {
//   constructor(timeout) {
//     this.timeout = timeout;
//   }
//   then(resolve, reject) {
//     const startTime = Date.now();
//     setTimeout(() => resolve(Date.now() - startTime),
//                this.timeout);
//   }
// }

// (async () => {
//   const actualTime = await new Sleep(1000);
//   console.log(actualTime);
// })()