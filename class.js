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