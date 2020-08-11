
// 1、2、8
// 宏任务 3 5
// 微任务 4
// 执行微任务 4
// 宏任务3
// 没有微任务 继续执行宏任务 5
// 6 微任务7
// 7
console.log(1)

new Promise((resolve, reject) => {
  console.log(2)
  setTimeout(() => {
    console.log(3)
  }, 0);
  resolve()
}).then(() => {
  console.log(4)
})

setTimeout(() => {
  console.log(5)
  new Promise((resolve, reject) => {
    console.log(6)
    resolve()
  }).then(() => {
    console.log(7)
  })
}, 0);

console.log(8)

