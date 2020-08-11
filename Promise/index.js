// const tasks = [];
// const output = (i) => new Promise((resolve) => {
//   setTimeout(() => {
//     console.log(new Date, i);
//     resolve();
//   }, 1000*i);
// });

// for(var i = 0; i < 5; i++) {
//   tasks.push(output(i));
// }

// Promise.all(tasks).then(() => {
//   setTimeout(() => {
//     console.log(new Date, i)
//   }, 1000)
// })

const promise1 = new Promise((resolve, reject) => {
  // return 2
  return Promise.resolve(2)
})

promise1.then((res) => {
  console.log(res);
})