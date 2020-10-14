// 提供iterator接口的数据类型才能使用for...of

let newObj = {
  name: 'mlz',
  sex: 'girl',
  age: 18
}

newObj[Symbol.iterator] = function() {
  let index = 0, that = this, keys = Object.keys(that)
  return {
    next(){
      if (keys.length > index) {
        return {
          value: {
            key: keys[index],
            value: that[keys[index++]]
          },
          done: false
        }
      } else {
        return {
          value: undefined,
          done: true
        }
      }
      
    }
  }
}

// generate

Object.prototype[Symbol.iterator] = function* () {
  let keys = Object.keys(this)
  for (let i = 0; i < keys.length; i++) {
    yield {
      key: keys[i],
      value: this[keys[i]]
    }
  }
}

for (let i of newObj) {
  console.log(i);
}