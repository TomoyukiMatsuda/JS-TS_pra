const arry = [1, 2, 3, 4, 5]
// 最後に追加
arry.push(6)
console.log(arry)
// 最後を削除
arry.pop()
console.log(arry)
// 先頭を削除
arry.shift()
console.log(arry)
// 先頭に追加
arry.unshift(0)
console.log(arry)
// splice(start, deleteCount, items, items, items)
arry.splice(0, 2, 99, 100, 111)
console.log(arry)
// マージする
const arr2 = [10, 11, 12, 13, 14]
const arr3 = arry.concat(arr2)
console.log(arr3)

// forEach((value, index, array)=>{})
const arr4 = [1, 2, 3, 4, 5]
arr4.forEach((value, index, array) => console.log(value, index, array))

const newArray = arr4.map((v, i, a) => {
  console.log(v, i, a)
  return a
})
console.log('newArray', newArray)

const filterArry = arr4.filter((v, i, a) => {
  // truthyな値の場合に返す
  return v % 2 === 0
})
console.log(filterArry)

console.log('######### reduce ############')
const result = arr4.reduce((accuVal, currVal) => {
  console.log(accuVal, currVal)
  return accuVal + currVal
}, 10) // initialValue 初期値（省略した場合は配列の先頭が初期値となる）
console.log('result', result)

const joinArry = arr4.join('/')
console.log(joinArry)
