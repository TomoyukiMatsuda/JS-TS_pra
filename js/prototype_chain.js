function Person(name, age) {
  this.name = name
  this.age = age
  this.hello = function () {
    console.log('OwnProperty: ハロー', this.name)
  }
}
Person.prototype.hello = function () {
  console.log('Person prototype: ハロー', this.name)
}
Object.prototype.hello = function () {
  console.log('Object prototype: ハロー', this.name)
}

const p = new Person('まっちゃん', 29)

// この時優先的に浅いところからhello関数を探しに行って最初にあったhello関数を実行する
// OwnProperty -> Person.prototype -> Object.prototype の順番
p.hello()

console.log(p)
