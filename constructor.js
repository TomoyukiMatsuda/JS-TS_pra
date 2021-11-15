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

console.log("------------------- __prototype__ ----------------------")
function F(a, b) {
  this.a = a
  this.b = b
  // return {a: 1}  これは下３行と同じ
  // const result = new Object()
  // result.a = 1
  // return result
}

F.prototype.c = function() {}
// new 演算子が実際に行っている挙動を自分で書いてみる
function newOpe(C, ...args) {
  const _this = Object.create(C.prototype)
  const result = C.apply(_this, args)
  console.log(result, _this)
  if (typeof result === "object" && result !== null) {
    return result
  }
}
const instance = newOpe(F, 1, 2)
console.log(instance)

console.log("------------------- instanceof ----------------------")

const ins = new F(1, 2)
console.log(ins instanceof Object) // プロトタイプチェーンで比較（Objectは親）
// instanceof が行っていること、insの__proto__とFのprototypeを比較している
console.log(ins.__proto__ === F.prototype)

function fn(arg) {
  if (arg instanceof Array) {
    arg.push('バリュー')
  } else {
    arg['key'] = 'バリュー'
  }
  console.log(arg)
}
fn({})