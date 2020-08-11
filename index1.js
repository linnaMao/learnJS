var a = {
  value: 1
}
function foo(a) {
  a.value = 2
  console.log(a.value);
}

foo(a)

console.log(a.value);