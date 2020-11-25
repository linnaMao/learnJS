// 插入排序
const arr = [5,6,3,4,1,2,7 ,8 ,10,9]
function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let preIndex = i - 1
    let current = arr[i]    
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex]
      preIndex --
    }
    arr[preIndex + 1] = current
  }
  return arr
}

function insert(arr) {
  for (let i = 1; i < arr.length; i++) {
    let preIndex = i - 1
    let current = arr[i]
    if (arr[preIndex] > current && preIndex >= 0) {
      arr[preIndex + 1] = arr[preIndex]
      preIndex --
    }
    arr[preIndex + 1] = current
  }
  return arr
}

console.log(insertSort(arr)); 