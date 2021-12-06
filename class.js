class Person {
  // コンストラクター
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  // prototype宣言
  hello() {
    console.log('ハロー ' + this.name)
  }
}

// 上記のclassでは以下のことと同じことをやっている
// function Person(name, age) {
//   this.name = name
//   this.age = age
// }
// Person.prototype.hello = function() {
//   console.log('ハロー ' + this.name)
// }

const p = new Person('松田', 29)
console.log(p)
p.hello()


class Jap extends Person {
  constructor(props, props2) {
    // super(name, age) って感じで親コンストラクタを実行
    super(props, props2);
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