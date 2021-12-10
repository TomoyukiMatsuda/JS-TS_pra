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

function Person(name, age) {
  this._name = name
  this._age = age
}

// これでもstaticメソッドを作成できる
Person.hello = function() {
  console.log('staticメソッドを代入')
}
Person.hello()

Object.defineProperty(Person.prototype, 'name', {
  get: function() {
    // ここに何らかの処理を実行したりできる
    return this._name
  },
  set: function(val) {
    // ここに何らかの処理を実行したりできる
    this._name = val
  }
})
const p = new Person('ボブ', 22)
console.log(p.name) // =>ボブ  この時にgetが呼ばれる
p.name = 'トム' // この時にsetが呼ばれる
console.log(p.name) // =>トム  この時にgetが呼ばれる

class Person2 {
  // Object.defineProperty() でgetterとsetterをセットするのと同じこと
  constructor(name, age) {
    this._name = name
    this._age = age
  }

  get name() {
//    console.log('hello')
    return this._name
  }
  set name(val) {
    this._name = val
  }

  static hello() {
    console.log('staticメソッド, こんちはーーーー', this._name) // thisは基本的に利用できない undefined
  }
}
Person2.hello()
const p2 = new Person2('パーソン２', 22)
console.log(p2.name) // =>ボブ  この時にgetが呼ばれる
p2.name = 'パーソン3' // この時にsetが呼ばれる
console.log(p2.name) // =>トム  この時にgetが呼ばれる
console.log(p2)
