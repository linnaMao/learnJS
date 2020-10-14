let obj = new Proxy({}, {
  get: function(target, propKey, receiver) {
    console.log(`getting ${propKey}`);
    return Reflect.get(target, propKey, receiver)
  },
  set: function(target, propKey, value, receiver) {
    console.log(`setting ${propKey}`);
    return Reflect.set(target, propKey, value, receiver)
  }
})

// 实现数组中index负数获取值


function createArray(...elements) {
  let handler = {
    get: function(target, propKey, receiver) {
      let index = Number(propKey)
      if (index < 0) {
        propKey = String(index + target.length)
      }
      return Reflect.get(target, propKey, receiver)
    }
  }

  let target = []
  target.push(...elements)
  return new Proxy(target, handler)
}

let arr = createArray('a', 'b', 'c')
// console.log(arr[-1]);

// // 生成各种节点的通用函数dom
// const dom = new Proxy({}, {
//   get(target, property) {
//     return function(attrs = {}, ...children) {
//       let el = document.createElement(property)
//       for (let prop of Object.keys(attrs)) {
//         el.setAttribute(prop, attrs[prop])
//       }
//       for(let child of children) {
//         if (typeof child === 'string') {
//           child = document.createTextNode(child)
//         }
//         el.appendChild(child)
//       }
//       return el
//     }
//   }
// })

// const el = dom.div({},
//   'Hello, my name is ',
//   dom.a({href: '//example.com'}, 'Mark'),
//   '. I like:',
//   dom.ul({},
//     dom.li({}, 'The web'),
//     dom.li({}, 'Food'),
//     dom.li({}, '…actually that\'s it')
//   )
// );

// document.body.appendChild(el);

// set

let validator = {
  set: function(obj, prop, value) {
    if (prop === 'age') {
      if (!Number.isInteger(value)) {
        throw TypeError("The age is not an integer")
      }
      if (value > 200) {
        throw RangeError("The age seems invalid")
      }
    }
    obj[prop] = value
  }
}

let person = new Proxy({}, validator)

person.age = 100
person.age = 7000