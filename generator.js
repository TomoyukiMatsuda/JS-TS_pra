function* gen() {
  yield 1;
  yield 2;
  return 3;
}

const it = gen()
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())

function* genIterator(max = 10) {
  let i = 0

  while(i < max) {
    console.log('while内', i)
    yield i++
  }
  console.log('while外', i)
  return;
}

const it2 = genIterator()
let a = it2.next()
while(!a.done) {
  console.log(a)
  a = it2.next()
}

// 反復可能オブジェクトをジェネレーターで実装
const items = {
  prop1: 'value1',
  prop2: 'value2',
  prop3: 'value3',
}
// この設定をすることで for of が実行可能になる
Object.prototype[Symbol.iterator] = function*() {
  for(let key in this) {
    // for of でreturn?される値
    yield [key, this[key]]
  }
}

for (const item of items) {
  console.log(item)
}
