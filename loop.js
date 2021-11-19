//反復処理
for(let i = 0; i < 10; i++) {
  console.log(i)
}
console.log('+++++++++++++++++++++++++++++++++++++')
let i = 0
while(i < 10) {
  console.log(i)
  i++
}

console.log('+++++++++++++++++++++++++++++++++++++')

for(let num = 0; num < 5; num++) {
  // 反復処理実行ごとに異なるメモリ空間にkakeruの変数領域が設けられる
  const kakeru = num * 2
  console.log(kakeru)
 }

 console.log('+++++++++++++++++++++++++++++++++++++')

// 演算子
let a = 0
let b = ++a // aに++した後の結果をreturnする
// a = b = 1 を行っている
console.log(`a: ${a}, b: ${b}`) // a: 1, b: 1

let c = 0
let d = 0
//let d = c++ // cに++する前の結果をreturnする
// c = (d = c) + 1 を行っている
console.log(`c: ${c}, d: ${d}`) // c: 1, d: 0

function fn() {
  let f = 0
  return f++ // 0がreturnされる
}
// !fn()で0がtrueになる、true*5で数値型変換がされて1*5となる
console.log(!fn()*5) // 5

