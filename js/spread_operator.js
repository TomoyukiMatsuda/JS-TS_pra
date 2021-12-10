const arry1 = [1, 2, 3, 4, 5]
const arry2 = [...arry1] // 全く新しい配列が作成される

console.log(arry1 === arry2) // false
arry2.push(6) // arry1は影響を受けず、arry2にだけ値が追加される
console.log(arry1, arry2)

function sum(...args) {
  console.log(args) // 引数で渡した場合にそれらが配列で渡る
  let ret = 0

  for (let v of args) {
    ret += v
  }
  return ret
}
const result = sum(1, 2, 3, 4)
console.log(result)

const obj = {
  prop1: 'val1',
  prop2: 'val2',
  prop3: 'val3',
}
// これでGenerator(iterator)がobj（Objectに設定される）
Object.prototype[Symbol.iterator] = function*() {
  for(let key in this) {
    yield [key, this[key]]
  }
}
// 上記によりiteratorが機能するため[...obj]が動作する
const arry3 = [...obj]
console.log(arry3)
