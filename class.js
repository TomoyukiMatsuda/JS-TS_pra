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

// インスタンス化
const bob = new Person('まつ', 28)
console.log(bob)

// クラス継承
class Japanese extends Person {
  constructor(name, age, gender) {
    // super()で親クラスのコンストラクタが実行されるようになる
    super(name, age) // superは一番上部に記述する必要がある
    this.gender = gender
  }
   // extendsによってprototypeも継承される

   // prototypeを上書きする
   hello() {
     super.hello() // 親のhello()を実行
     console.log('こんちは' + this.name)
   }
}
const jp = new Japanese('田中', 28, '男')
console.log(jp)
jp.hello()

const american = {
  hello() {
    console.log('hello ' + this.name)
  }
}

const mike = {
  name: 'mike',
  hello() {
    super.hello()
    //console.log('hello ' + this.name)
  }
}

// Object.setPrototypeOf(継承先 子, 継承元 親)
Object.setPrototypeOf(mike, american) // prototype継承
mike.hello()