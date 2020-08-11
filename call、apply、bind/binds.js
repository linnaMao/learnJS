
// Function.prototype.bind = function(context) {
//   const self = this
//   return function() {
//     console.log(context)
//     return self.call(context)
//   }
// }

let foo = {
  value: 1
}

function bar(name, age) {
  console.log(this.value, name, age);
}

bar.bind(foo, 'kevin', 18)()
