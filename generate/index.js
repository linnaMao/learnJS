// function* helloWorldGenerator() {
//   yield 'hello';
//   yield 'world';
//   // return 'ending';
// }

// var hw = helloWorldGenerator();

// console.log(hw.next());
// console.log(hw.next());
// console.log(hw.next());
// console.log(hw.next());

// function *f() {
//   console.log('执行了！')
// }

// var generator = f();

// setTimeout(function () {
//   generator.next()
// }, 2000);

// var arr = [1, [[2, 3], 4], [5, 6]];

// function *flat(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let item = arr[i]
//     if (typeof item !== 'number') {
//       yield *flat(item)
//     } else {
//       yield item
//     }
//   }
// }

// for(let item of flat(arr)) {
//   console.log(item);
// }

// function *foo(x) {
//   let y = 2 * (yield (x + 1))
//   let z = yield(y / 3)
//   return (x + y + z)
// }

// let generator = foo(5)
// console.log(generator.next()); 
// console.log(generator.next(6)); 
// console.log(generator.next(4)); 

// let colors = ['red', 'yellow', 'blue']

// for(let key of colors.keys()) {
//   console.log(key);
// }

// for(let color of colors.values()) {
//   console.log(color);
// }

// for(let item of colors.entries()) {
//   console.log(item);
// }

// const values = new Map([["key1", "value1"], ["key2", "value2"]]);
// for(let [key, value] of values) {
//   console.log(key + ':' + value);
// }

// const values1 = new Set([1,2,3,3])

// let arr = [1,[2,3],4]

// function *flat(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] !== 'number') {
//       yield *flat(arr[i])
//     } else {
//       yield arr[i]
//     }
//   }
// }
// let arr1 = []
// for(let item of flat(arr)) {
//   arr1.push(item)
// }

// console.log(arr1);

