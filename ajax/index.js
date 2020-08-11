// function ajax(object) {
//   const xhr = new XMLHttpRequest();
//   xhr.open(object.method, object.url)
//   if(object.method === "post") {
//     xhr.setRequestHeader(object.head ? object.head : "Content-Type", object.myHead ? object.myHead : "application/x-www-form-urlencoded");
//     xhr.send(getData(object.data))
//   } else {
//     xhr.send(null)
//   }
//   xhr.onreadystatechange = () => {
//       if (xhr.readyState == 4) {
//           if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
//               console.log(getData(object.data))
//               object.success(xhr.responseText)
//           } else {
//               alert("Request was unsuccessful: " + xhr.status)
//           }
//       }
//   }
// }

// const data = {
//   url: "https://jsonplaceholder.typicode.com/posts",
//   method: "post",
//   data: {
//     name: "pyc",
//     age: 27
//   },
//   success: function(response) {
//     console.log(response)
//   }
// }

// ajax(data) 
function getData(data) {
  let arr = Object.keys(data);
  let str = ""
  for(let i=0; i<arr.length; i++) {
    str = str + arr[i] + "=" + data[arr[i]] + "&"
  }
  return str;
}

const data = {
  url: "https://jsonplaceholder.typicode.com/posts",
  method: "post",
  data: {
    name: 'mlz',
    age: 20
  },
  success: function(response) {
    console.log(response)
  }
}

function ajax(object) {
  // 第一步：创建异步对象
  const xhr = new XMLHttpRequest();
  // 第二步：设置请求open(请求方式, 请求url)
  xhr.open(object.method, object.url);
  // 第三步，第四步：判断请求
  if (object.method === "post") {
    // 则设置请求头和send
    xhr.setRequestHeader(object.head ? object.head : "Content-Type",object.myHead ? object.myHead : "application/x-www-form-urlencoded");
    xhr.send(getData(object.data))
  } else {
    // 设置send为null
    xhr.send(null)
  }
  // 第五步：让异步对象接收服务器的数据响应
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4) {
      if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
          // console.log(getData(object.data))
          object.success(xhr.responseText)
      } else {
          alert("Request was unsuccessful: " + xhr.status)
      }
    }
  }
}
ajax(data)


