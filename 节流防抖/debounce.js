const container = document.getElementById('debounce')
let num = 1

function getUserAction() {
  container.innerHTML = num++
}

function debounce(func, wait, immediate) {
  let timeout  //false
  return function() {
    let context = this
    let arg = arguments
    if (timeout) clearTimeout(timeout)
    if (immediate) {
      let callNow = !timeout  //!timeout === true
      timeout = setTimeout(function() {
        timeout = null
      }, wait)
      if (callNow) func.apply(context, arg)
    } else {
      timeout = setTimeout(function() {
        func.apply(context, arg)
      }, wait);
    }
  }
}

container.onmousemove = debounce(getUserAction, 1000, true)

