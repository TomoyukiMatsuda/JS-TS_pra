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