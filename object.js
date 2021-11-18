// ビルトインオブジェクト
// jsエンジンに標準で用意されているオブジェクト群
const arry = new Array(1, 2, 3, 4)
console.log(arry)

// ラッパーオブジェクト
const str = new String('hello')
// const str = 'hello' // これでも同じこと
console.log(str.toUpperCase())

const n = new Number(100)
console.log(n.toExponential())