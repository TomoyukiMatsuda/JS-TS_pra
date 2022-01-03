/**
 * 問題：
 * 反復操作可能なオブジェクトIteratableObject
 * を作成してみましょう。
 * Arrayと同様に以下のメソッドが使用可能とします。
 *
 * set(key, value)  *1
 * forEach
 * map
 * filter
 *
 * *1:setはチェーンメソッドとしてつなげられるように実装してみてください。
 *
 * また、for...ofを使用した際にはMapと同じ挙動を取るものとします。
 *
 */
class IteratableObject {
  constructor(obj) {
    console.log('constructor', obj)
    for(let prop in obj) {
      console.log('constructor', prop)
      this[prop] = obj[prop];
    }
  }

  print(label = '') {
    console.log(`%c ${label}`, 'color: blue; font-weight: 600;', this);
    return this;
  }
  set(key, value) {
    this[key] = value
    return this
  }

  // for of が可能になる イテレーターの追加
  *[Symbol.iterator]() {
    for (let key in this) {
      yield [key, this[key]];
    }
  }
}

function prefix(v, i, obj) {
  return 'prefix-' + v;
}

const original = new IteratableObject({
  key1: 'value1',
  key2: 'value2',
  key3: 'value3',
});

for (let [k, v] of original) {
  console.log(k, v)
}

const result = original
  .myMap(prefix)
  .set('key4', 'value4')
  .myFilter(function (val, key) {
    return key === 'key4';
  });

console.log('%coriginal', 'color: blue; font-weight: bold;', original);
console.log('%cresult', 'color: red; font-weight: bold;', result);
/**
 * 期待する出力結果
 * original
 * {key1: "value1", key2: "value2", key3: "value3"}
 *
 * result
 * {key4: "value4"}
 */