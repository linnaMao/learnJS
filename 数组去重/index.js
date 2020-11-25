// 双层循环
let arr = [1, 1, 2, 2]

// function unique(array) {
//   let res = []
//   for (var i = 0, arrayLen = array.length; i < arrayLen; i++) {
//     for (var j = 0, resLen = res.length; j < resLen; j++) {
//       if (array[i] === res[j]) {
//         break
//       }
//     }
//     if (j === resLen) {
//       res.push(array[i])
//     }
//   }
//   console.log(res);
// }

// unique(array)

// indexOf
// function unique(array) {
//   let res = {}
//   let newArr = []
//   for (let i = 0; i < array.length; i++) {
//     let current = array[i]
//     if (!res[current]) {
//       res[current] = true
//       newArr.push(current)
//     }
//   }
//   return newArr
// }

// console.log(unique(array));

// 排序后去重

// ES6
// Array.from([...new Set(array)])

// function unique (arr) {
//   const seen = new Map()
//   return arr.filter((a) => !seen.has(a) && seen.set(a, 1))
// }
// console.log(Array.from([...new Set(array)]));


function unique(arr) {
  let newArr = []
  let newObj = {}
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i]
    if (!newObj[current]) {
      newObj[current] = true
      newArr.push(current)
    }

    // if (newArr.indexOf(arr[i]) === -1) {
    //   newArr.push(arr[i])
    // }
  }
  return newArr
}

// let a = new Set()
// arr.forEach((i) => a.add(i))
// console.log([...new Set(arr)]);

console.log(unique(arr));



