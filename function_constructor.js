let d = 0 // これが return の関数スコープ内で参照される
function fn() {
  let d = 1 // この変数が下の return の d の参照先ではない
  const fn1 = new Function('a', 'b', 'return a * b * d') // ここの変数はグローバルスコープを探しにいく
  return fn1
}

const f = fn()
const result = f(1, 2)

console.log(result)

function fn2(a, b) {
  return a + b
}
console.log(fn2 instanceof Function)

const obj = new function () { // オブジェクトが作成される
  this.a = 0
}
const fn3 = new Function('this.a = 0;') // 関数を作成するコンストラクタ
const obj3 = new fn3()
console.log(obj)
console.log(fn3)
console.log(obj3)
