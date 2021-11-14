// コンストラクタ関数 大文字で始めるのが一般的
function Person(name, age) {
  this.userName = name
  this.userAge = age
}
// prototypeオブジェクトに関数をセット
Person.prototype.hello = function() {
    console.log("ハロー " + this.userName)
  }

// newでインスタンス化
const matsuda = new Person('まつだ', 28)
console.log(matsuda)
// インスタンス化した際にはprototypeの参照が__proto__にコピーされる
matsuda.hello()

// コンストラクター関数の戻り値がオブジェクト以外の場合は
// __proto__ にprototypeをコピーしたオブジェクトを返す
// このオブジェクトを'this'の参照先としてコンストラクター関数を実行する
// new Person('name', 30) __proto__ にprototypeをコピーしたオブジェクトを返す
