arr = [1, [2, [3, 4]], 5]

// function flatten(arr) {
//   let newArr = []
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       newArr = newArr.concat(flatten(arr[i]))
//     } else {
//       newArr.push(arr[i])
//     }
//   }
//   return newArr
// }

// console.log(flatten(arr));

// function flatten(arr) {
//   return arr.reduce((prev, next) => {
//     return prev.concat(Array.isArray(next) ? flatten(next) : next)
//   }, [])
// }

// console.log(flatten(arr));

// // 只可以扁平化一层

// let newArr = [].concat(...arr)
// console.log(newArr);

