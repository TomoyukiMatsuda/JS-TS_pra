class Person {
  static STATIC_PROP = 'スタティックプロパティ'
  static staticMethod() {
    console.log('スタティックメソッド:' + Person.STATIC_PROP)
  }

  constructor(name, age) {
    this.name = name
    this.age = age
  }
  // prototype宣言、インスタンスメソッド
  hello() {
    console.log('ハロー ' + this.name)
  }
}
Person.staticMethod()

// 上記のclassでは以下のことと同じことをやっている
// function Person(name, age) {
//   this.name = name
//   this.age = age
// }
// Person.prototype.hello = function() {
//   console.log('ハロー ' + this.name)
// }
// new するとコンストラクタが実行されて、その中で使われているthisがnew演算子の結果として返される
const p = new Person('松田', 29)
console.log(p)
p.hello()

class Jap extends Person {
  constructor(props, props2, childProp) {
    // super(name, age) って感じで親クラスのコンストラクタを実行
    super(props, props2);
    this.childProp = childProp // 小クラス独自のプロパティを追加
    console.log('constructor', props, props2)
  }
  bye() {
    // 親クラスのhello()メソッドを実行
    super.hello()
    console.log('さよなら', this.name)
  }
}

const matsumoto = new Jap('松本', 28)
console.log(matsumoto)
matsumoto.bye()
matsumoto.hello()

const bob = {
  name: 'ボブ',
  hello() {
    super.hello()
  }
}

Object.setPrototypeOf(bob, matsumoto)
bob.hello()