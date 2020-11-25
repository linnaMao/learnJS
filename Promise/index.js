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



Promise.all = function (promise) {
  return new Promise((resolve, reject) => {
      let index = 0
      let result = []
      if (promise.length === 0) {
          resolve(result)
      } else {
          function processValue(i, data) {
              result[i] = data
              if (++index === promise.length) {
                  resolve(result)
              }
          }
          for (let i = 0; i < promise.length; i++) {
              Promise.resolve(promise[i]).then((data) => {
                  processValue(i, data)
              }, (err) => {
                  reject(err)
                  return
              })
          }
      }
  })
}

Promise.all = function(promise) {
  return new Promise((resolve, reject) => {
    let result = []
    let count = 0
    function promiseData(key, value) {
      result[key] = value
      if (++count === promise.length) {
        resolve(result)
      }
    }

    for (let i = 0; i < promise.length; i++) {
      let current = promise[i]
      if (isPromise(current)) {
        current.then((res) => {
          promiseData(i, res)
        })
      } else {
        promiseData(i, current)
      }
    }
  })
}
