// 浅拷贝
// Object.assige()
// let target = {};
// let source = { a: { b: 2 } };
// Object.assign(target, source);
// source.a.b = 3
// console.log(target, source)

// 扩展运算符
// let obj = {a:1,b:{c:1}};
// let obj1 = obj
// let obj2 = {...obj};
// obj2.a = 3
// obj2.b.c = 3
// console.log(obj, obj2);



// obj.b.c = 2;
// console.log(obj, obj2)

// concat和slice （数组）

// let arr = [1, 2, {
//   name: 'linna'
// }]

// let arr1 = arr.concat()
// let arr2 = arr.slice()
// arr1[2].name = 'pyc'
// console.log(arr, arr2);


// let str = 'linna'
// let str2 = str.concat('Mao')

// let str1 = str.split("")
// console.log(str.toString());


// 深拷贝
// JSON.stringify
// let obj1 = {x: 1, y: {
//   m: 2
// },
// z: undefined,
// a: Symbol("foo"),
// b: function add(x, y) {
//   return x+y
// }}
// // let obj2 = Object.assign({}, obj1)
// let obj2 = JSON.parse(JSON.stringify(obj1))
// console.log(obj1, obj2);
// obj2.y.m = 3
// console.log(obj1, obj2);

// 自己实现一个深拷贝
// function deepClone(obj) {
//   let cloneObj = {};
//   for(key in obj) {
//     if(typeof obj[key] === "object") {
//       cloneObj[key] = deepClone(obj[key])
//     } else {
//       cloneObj[key] = obj[key]
//     }
//     return cloneObj
//   }
// }
// let myObj = { a:{ b:1 } };
// let myObj2 = deepClone(myObj);
// myObj2.a.b = 2
// console.log(myObj, myObj2)

let obj = {
  a: [1,2,3],
  b: 6,
  c: {
    d: 2
  },
  e: undefined
  
}

function deepClone(obj) {
  if (typeof obj !== 'object') return;
  let cloneObj = obj instanceof Array ? [] : {}
  for(let key in obj) {
    cloneObj[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]
  }
  return cloneObj
}

let obj2 = deepClone(obj)
obj2.c.d = 3
console.log(obj, obj2);


function cloneDeep(obj) {
  let cloneObj = Array.isArray(obj) ? [] : {}
  for (let i in obj) {
    cloneObj[i] = typeof arr[i] === 'object' ? cloneDeep(arr[i]) : arr[i]
  }
  return cloneObj
}

