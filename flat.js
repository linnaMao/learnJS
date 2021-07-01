/**
 * 实现 Array.prototype.flat的polyfill
 * var arr = [1, 2, [3, [4, 5]]]
 * 
 * var result1 = arr.flat() // [1, 2, 3, [4, 5]]
 * var result2 = arr.flat(2) // [1, 2, 3, 4, 5]
 */

Array.prototype.flat = function (depth) {
  if (depth === undefined) depth = 1
  if (depth === 0) return this
  return this.reduce((res, next) => {
    if (Array.isArray(next)) {
      return res.concat(next.flat(depth-1))
    } else {
      return res.concat(next)
    }
  }, [])
}

var arr = [1, 2, [3, [4, 5]]]
var result1 = arr.flat(2) // [1, 2, 3, [4, 5]]
console.log(result1)
