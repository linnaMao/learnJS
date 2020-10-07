let num = 1
let container = document.getElementById('debounce')
function getUserAction(e) {
  container.innerHTML = num++
}


// 两种主流实现方式
// 时间戳
// 立即执行
// function throttle(func, wait) {
//   let context, arg
//   let previous = 0
//   return function() {
//     context = this
//     arg = arguments
//     let now = +new Date()
//     if (now - previous > wait) {
//       func.apply(context, arg)
//       previous = now
//     }
//   }
// }

function throttle(func, wait) {
  let pre = 0
  return function() {
    let arg = arguments, context = this
    let now = +new Date()
    if (now - pre > wait) {
      func.apply(context, arg)
      pre = now
    }
  }
}

function throttle(func, wait) {
  let timeout
  return function() {
    let arg = arguments, context = this
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null
        func.apply(context, arg)
      }, wait);
    }
  }
}

// 定时器
// 规定时间后执行
// function throttle(func, wait) {
//   let timeout
//   let context, arg
//   return function() {
//     context = this
//     arg = arguments
//     if (!timeout) {
//       timeout = setTimeout(function() {
//         timeout = null
//         func.apply(context, arg)
//       }, wait);
//     }
//   }
// }

// 两者结合 
// 头和尾都能够请求一次
function throttle(func, wait) {
  let timeout, context, arg
  let previous = 0
  return function() {
    let now = +new Date()
    let remain = wait - (now - previous)
    context = this
    arg = arguments
    if (remain <= 0 || remain > wait) {
      if (timeout) {
        console.log('2');
        clearTimeout(timeout)
        timeout = null
      }
      func.apply(context, arg)
      previous = now
    } else if (!timeout) {
      timeout = setTimeout(function() {
        previous = +new Date()
        console.log('1')
        func.apply(context, arg)
        timeout = null
      }, wait);
    }
  }
}


container.onmousemove = throttle(getUserAction, 1000)
// container.onmousemove = getUserAction