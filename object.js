'use strict'

// ビルトインオブジェクト
// jsエンジンに標準で用意されているオブジェクト群
const arry = new Array(1, 2, 3, 4)
console.log(arry)

// ラッパーオブジェクト
const str = new String('hello')
// const str = 'hello' // これでも同じこと
console.log(str.toUpperCase())

const n = new Number(100)
console.log(n.toExponential())

// シンボル Symbol
const s = Symbol('hello')
const s2 = Symbol('hello')
// 異なる値が生成されるので上記2つを比較してもfalseになる
console.log(s, s2, s === s2, typeof s) // Symbol(hello) Symbol(hello) false 'symbol'

const st = new String('Tom')
console.log(st)

// 基本的にこのような記述はしない
String.prototype[s] = function() {
  return 'hello ' + this
}
const tom = 'Tom'
console.log(tom[s]()) // hello Tom

// プロパティとディスクリプター
// const obj = {prop: 0}
const obj = {}
// それぞれのプロパティにはディスクリプターという設定がされている
Object.defineProperty(obj, 'prop', {
  value: 10,
  writable: true, // 値の書き換え可能にする
  configurable: true // 設定を変えることを許可する（delete可能に）
})
delete obj.prop
//obj.prop = 0
console.log(obj.prop)
const descriptor = Object.getOwnPropertyDescriptor(obj, 'prop')
console.log(descriptor)
