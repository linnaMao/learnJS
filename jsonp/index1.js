// // 假设这个是你import进来的jsonp
// function jsonp(url, option, callback) {
//   setTimeout(() => {
//     callback()
//   }, 1000);
// }

// // 自己封装一个Promise
// function myJsonpPromise(url, option) {
//   return new Promise((resolve, reject) => {
//     jsonp(url, option,() => resolve(option.key))
//   })
// }
// // 使用myJsonpPromise
// myJsonpPromise('http://api.com', {
//   key: 'promise 获取到的数据',
// }).then(res => {
//   console.log(res)
// })

// // 自己粉转一个回调函数
// function myJsonpCallback(url, option, callback) {
//   jsonp(url, option,() => callback(option.key))
// }
// // 使用myJsonpCallback
// myJsonpCallback('http://api.com', {
//   key: 'callback获取到的数据'
// }, (res) => {
//   console.log(res)
// })


// 仿照jsonp
function jsonp(url, option, callback) {
  setTimeout(() => {
    callback()
  }, 1000);
}

// 利用promise实现jsonp跨域
function myJsonpPromise(url, option) {
  return new Promise((resolve, reject) => {
    jsonp(url, option, () => resolve(option.key))
  })
}

// 使用myJsonpPromise
myJsonpPromise('http://api.com', {
  key: 'promise实现jsonp'
}).then((res) => {
  console.log(res)
})

// 利用callback实现jsonp跨域
function myJsonpCallback (url, option, callback) {
  return jsonp(url, option, () => callback(option.key))
}

// 使用myJsonpCallback
myJsonpCallback('http://api.com', {
  key: 'callback实现jsonp'
}, (res) => {
  console.log(res)
})