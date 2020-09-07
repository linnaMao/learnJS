// 快速排序
const arr = [5,6,3,4,1,2,7 ,8 ,10,9]

function quickSort(arr) {
  if (arr.length < 2) return arr;
  const pivot = Math.floor(arr.length / 2 )      //基准点
  const pivotValue = arr.splice(pivot, 1)[0] 
  let leftArr = []
  let rightArr = []
  arr.forEach(item => {
    item > pivotValue ? rightArr.push(item) : leftArr.push(item)
  });
  return [...quickSort(leftArr), pivotValue, ...quickSort(rightArr)]
}

console.log(quickSort(arr));

function quick(arr) {
  if (arr.length < 2) return arr
  const pivot = Math.floor(arr.length / 2)
  const pivotValue = arr
}