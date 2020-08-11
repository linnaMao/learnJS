// 冒泡排序

const arr = [5,6,3,4,1,2,7 ,8 ,10,9]

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length-i-1; j++) {
      arr[j] > arr[j+1] && ([arr[j], arr[j+1]] = [arr[j+1], arr[j]])
    } 
  }
  return arr
}

console.log(bubbleSort(arr));