// コンストラクタ関数 大文字で始めるのが一般的
function Person(name, age) {
  this.userName = name
  this.userAge = age
}
// newでインスタンス化
console.log(new Person('松田', 28))
