/**
 * call, apply
 * 'this'や引数の参照先を変更する。
 * 使用時点で実行する （bindは使用時点で実行しない）
 **/
 function a() {
  console.log('ハロー' + this.name);
}
const tim = {name: 'ティム'}

const b = a.bind(tim)
b() // bindでは実行させる必要がある

// 同時に実行される
a.apply(tim)
a.call(tim)


function func(name, name2) {
  console.log('ハロー' + name + ', ' + name2)
}

// apply(thisの参照先, [引数の参照先]) 第２引数は配列で渡す
func.apply(null, ['マイク', 'ボブ'])
// call(thisの参照先, 引数の参照先, 引数の参照先) 第２引数, 第３引数という形で渡す（引数が複数個ある場合）
func.call(null, 'マイク', 'ボブ')

// apply実践
// 最大値を取得したい
const arry = [1,2,3,4,5]
const maxResult = Math.max.apply(null, arry)
console.log(maxResult)

// ES6以降はスプレッド構文を使う
const maxResult2 = Math.max(...arry)
console.log(maxResult2)
