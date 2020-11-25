var arrayLike = {0: 'name', 1: 'age', 2: 'sex', length: 3 }
// Array.prototype.join.call(arrayLike, '&')
// Array.prototype.slice.call(arrayLike, 0) //类数组转变为数组
// Array.prototype.splice.call(arrayLike, 0)
// Array.from(arrayLike)
// Array.prototype.concat.apply([], arrayLike)

// const a = Array.prototype.map.call(arrayLike, item => {
//   return item
// })

function foo(...arrayLike) {
  console.log(arrayLike);
}

foo()

console.log(Array.prototype.slice.call(arrayLike, 0));
