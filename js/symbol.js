// Symbol
// プリミティブ型の一つ、値を取得する時は必ず関数を使う
// プロパティの重複を避けるために、必ず一意の値を返す関数
const s = Symbol('ハロー')
console.log(s) // Symbol(ハロー)
const s2 = Symbol('ハロー')
console.log(s2) // Symbol(ハロー)
console.log(s === s2) // false 必ず一意の値になるためfalse
console.log(typeof s) // symbol

console.log(new String('トム'))