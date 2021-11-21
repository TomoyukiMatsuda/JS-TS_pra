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
