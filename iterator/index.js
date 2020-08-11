// function makeIterator(array) {
//   let nextIndex = 0
//   return {
//     next: function() {
//       return nextIndex < array.length ? 
//         console.log({value: array[nextIndex ++]}) :
//         console.log({done: true})
//     }
//   }
// }

// let iterator = makeIterator(['a', 'b'])
//  iterator.next()
//  iterator.next()
//  iterator.next()

let arr = ['a', 'b', 'c']
let iter = arr[Symbol.iterator]()
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());