var arr = [6, 4, 1, 8, 2, 23, 11];
// console.log(Math.max(...arr));
// console.log(Math.max.apply(null, arr));
// arr.sort((a, b) => (
//   a - b
// ))
// console.log(arr[arr.length - 1]);

// console.log(arr.reduce((a, b) => 
// a>b?a:b
// ));

// let reduce = arr.reduce((prev, next) => {
//   console.log(prev, next);
//   return Math.max(prev, next)
  
// })
// console.log(reduce);

arr.sort((a, b) => {
  return a - b
})

console.log(arr[arr.length - 1]);

console.log(Math.max.apply(null, arr));

console.log(Math.max(...arr));