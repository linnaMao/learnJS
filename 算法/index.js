// let a = "1244539";
// let b = "3412499";

// function add(a, b) {
//   let aArr = a.split("").reverse();
//   let bArr = b.split("").reverse();
//   console.log(aArr);
//   // 进位
//   let c = 0;
//   let length = aArr.length > bArr.length ? aArr.length : bArr.length;
//   let newStr = [];
//   for (let i = 0; i < length; i++) {
//     if(!aArr[i]) {aArr[i] = 0}
//     if(!bArr[i]) {bArr[i] = 0}
//     let num = Number(aArr[i]) + Number(bArr[i]) + c
//     c = Math.floor(num / 10);
//     newStr[i] = num > 9 ? num % 10 : num
//   }
//   return newStr.reverse().join("");
// }

// console.log(add(a, b));

// let timeBinary = "110010000000000000000000000000000000000000000000";

// function timeBitmapToRanges(tb) {
//   let timeArr = [];
//   let a = 0;
//   for (let i = 0; i < tb.length; i++) {
//     console.log(a);
//     if (tb[i] === "1") {
//       a++;
//     } else {
//       if (a !== 0) {
//         let startH = Math.floor((i - a) / 2);
//         let startM = (i - a) % 2 === 1 ? "30" : "00";
//         let nowH = Math.floor(i / 2);
//         let nowM = i % 2 === 1 ? "30" : "00";
//         let time = startH + ":" + startM + "~" + nowH + ":" + nowM;
//         timeArr.push(time);
//       }
//       a = 0;
//     }
//   }
//   return timeArr;
// }

// timeBitmapToRanges(timeBinary);

// let a = {
//   b: {
//     c: 2,
//     d: 4
//   }
// };
// function foo(a, ...values) {
//   let init = "init";
//   let temp;

//   let x = false;

//   for (let i = 0; i < values.length; i++) {
//     const key = values[i];
//     const v = (temp || a)[key];
//     if (v === null || v === undefined) {
//       if (x) return init;
//       if (!x) {
//         x = true;
//       }
//     } else {
//       temp = v;
//     }
//   }
//   return temp;
// }

// console.log(foo(a, "b", "d"));
// console.log(foo(a, "c"));
// console.log(foo(a, "c", "d"));


// function find(arr) {
//   let index = 1
//   while(true) {
//     let sanmeStr = arr.map((item) => item.slice(0, index))
//     if([...new Set(sanmeStr)].length === 1) {
//       index ++
//     } else {
//       return arr[0].slice(0, index - 1)
//     }
//   }
// }

// console.log(find(['flow', 'flow', 'flowq']))
