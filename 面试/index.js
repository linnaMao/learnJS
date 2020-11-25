// 网易互娱
// 箭头函数绑定不了this
let obj = {
  a: 1,
  b: function() {
    console.log(this.a);
  },
  c: () => {
    console.log(this.a);
  }
}

obj.b()
obj.b.call({a: 3})
obj.c()
obj.c.bind(obj)()

// promise

new Promise((resolved, rejected) => {
  console.log(1);
  resolved()
  console.log(2);
}).then(() => {
  console.log(3);
  throw Error
}).then(() => {
  console.log(5);
}).catch(() => {
  console.log(4);
})

// 网易互娱二面
var name = 'World!';
(function () {

  if (typeof name === 'undefined') {
    var name = 'Jack';
    console.log('Goodbye ' + name);
  } else {
    console.log('Hello ' + name);
  }

})();

// 二

setTimeout(() => {
  console.log('A')
}, 0)
console.log('B'); new Promise((resolve) => {
  console.log('C');
  resolve()
}).then(() => {
  console.log('D');
})
console.log('E');

// 三:节流，要求第一个点击作为第一个时间节点，每个时间间隔中是时间窗口，在时间窗口内的所有点击都会在下一个时间节点执行最后一次
// 四
// .label{
//   width: 200px;  margin-right: 10px;
//   display:inline-block; }
// .input{
//   display:inline-block;
//   ......
// } <div><label class='label'>名称:</label><input class='input'/></div>


