function Person(name, age) {
  this.name = name
  this.age = age
}

Person.prototype.hello = function() {
  console.log('Person: hello ' + this.name)
}

Object.prototype.hello = function() {
  console.log('Object: hello ' + this.name)
}

const bob = new Person('Bob', 18)
bob.hello();
// hasOwnPropertyでインスタンス自身に該当のpropertyが存在するかどうかを確認する
console.log(bob.hasOwnProperty('age'))
// in はprototypeを含めて該当のpropertyが存在するかどうかを確認する
console.log('hello' in bob)

function Japanese(name, age, gender) {
  // Personのプロパティを継承する
  Person.call(this, name, age)
  // Japanese固有のプロパティ
  this.gender = gender
}
// PersonのprototypeをJapaneseのprototypeに継承する
Japanese.prototype = Object.create(Person.prototype)
Japanese.prototype.bye = function() {
  console.log('さよなら ' + this.name)
}

const matsuda = new Japanese('松田', 22)
console.log(matsuda) // {name: '松田', age: 22}
matsuda.hello()
matsuda.bye()

