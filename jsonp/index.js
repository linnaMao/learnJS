// 假设为插件的jsonp
function jsonp(url, option, callback) {
  setTimeout(() => {
    callback()
  }, 1000);
}

// 利用原本的callback实现跨域
function myJsonpCallback(url, option, callback) {
  return jsonp(url, option, () => callback(option.key))
}

// 调用myJsonpCallback
myJsonpCallback('http://api.com', {
  key: 'callback实现jsonp'
}, (res) => {
  console.log(res)
})

// 利用promise实现跨域
function myJsonpPromise(url, option) {
  return new Promise((resolve, reject) => {
    jsonp(url, option, () => resolve(option.key))
  })
}

// 调用myJsonpPromise
myJsonpPromise('http://api.com', {
  key: 'promise实现jsonp'
}).then((res) => {
  console.log(res)
})