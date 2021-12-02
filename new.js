function F(a, b) {
  this.a = a
  this.b = b
  // return を記載しない or プリミティブ型を return する場合には this が返る

  // 返り値がオブジェクトの場合はオブジェクトがそのまま返る
  return {}
}

// return {} 返り値をオブジェクトにするとprototypeは設定されない
F.prototype.c = function () {}
const i = new F(1, 2)
console.log(i)

console.log('########## new の動きをする関数を定義する ############')
// new演算子が内部で行っている処理
function newOpe(C, ...args) {
  const _this = Object.create(C.prototype)
  const result = C.apply(_this, args)
  console.log(result, _this)

  if (typeof result === 'object' && result !== null) {
    // C コンストラクタ関数の戻り値がオブジェクトでない時のnew演算子の挙動
    return result
  } else {
    // コンストラクタの戻り値がオブジェクトでない場合のnew演算子の挙動
    return _this
  }
}
const newOpeIns = newOpe(F, 1, 2)
console.log(newOpeIns)
