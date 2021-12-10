function Person(name, age) {
  this._name = name
  this._age = age
}
// 関数コンストラクタの場合にgetterとsetterを設定
Object.defineProperty(Person.prototype, 'name', {
  get: function () {
    console.log('get:', this._name)
    return this._name
  },
  set: function (val) {
    console.log('set:', val)
    this._name = val
  }
})
// 関数コンストラクタのstaticメソッド
Person.hello = function () {
  console.log('ハロー、パーソン１')
}
Person.hello()

const p1 = new Person('パーソン１', 22)
console.log(p1)
console.log(p1.name)
p1.name = '名前を変更したい'

console.log('############### class でgetterとsetter ##############')
// classでgetterとsetterを設定
class Person2 {
  constructor(name, age) {
    this._name = name
    this._age = age
  }

  // nameプロパティのgetterとsetter
  get name() {
    console.log('get:', this._name)
    return this._name
  }
  set name(val) {
    console.log('set:', val)
    this._name = val
  }

  // ageプロパティのgetterとsetter
  get age() {
    console.log('get:', this._age)
    return this._name
  }
  set age(val) {
    console.log('set:', val)
    this._age = val
  }

  instanceMethod() {
    console.log('インスタンスメソッド')

    // 以下２行は同じ処理
    console.log(Person2.STATIC_PROP)
    console.log(this.constructor.STATIC_PROP)

    // 以下２行は同じ処理
    this.constructor.hello()
    Person2.hello()
  }

  static STATIC_PROP = 'staticプロパティ'
  static hello() {
    // staticメソッドはインスタンスから呼ばれる訳ではないため、thisにはアクセスできない
    console.log('this: ', this) // class Person2 自信が出力されてしまう
    console.log('STATIC_PROP', this.STATIC_PROP)
    console.log('ハローーーー')
  }
}

const p2 = new Person2('パーソン2', 29)
console.log(p2.age)
p2.age = 33
Person2.hello()
p2.instanceMethod()