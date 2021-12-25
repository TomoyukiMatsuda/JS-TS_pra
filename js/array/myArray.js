/**
 * 問題：
 * Arrayを継承して以下のメソッドを実装してみましょう。
 *
 * push(*1)
 * forEach
 * map
 * filter
 * reduce
 *
 * *1:pushはチェーンメソッドとしてつなげられるように実装してみてください。
 */
class MyArray extends Array {
  constructor(...args) {
    super(...args)
  }

  print(label = '') {
    console.log(`%c ${label}`, 'color: blue; font-weight: 600;', this);
    return this;
  }
  push(val) {
    //return [...this, val]
    super.push(val)
    // thisを返しているので、破壊的（元のインスタンスの状態を変えてしまう）
    return this;
  }
  forEach(callbackFn) {
    for (let i = 0; i < this.length; i++) {
      callbackFn(this[i], i, this)
    }
  }
  map(callbackFn) {
    const newInstance = new MyArray();
    for (let i = 0; i < this.length; i++) {
      newInstance.push(callbackFn(this[i], i, this))
    }
    // 新しく生成したインスタンスを返しているので元のインスタンスには影響を及ぼさない（破壊的でない）
    return newInstance;
  }

}

function double(v, i, obj) {
  return v * 2;
}

const original = new MyArray(1, 2, 3, 4);
const result = original
  .map(double)

console.log(result)



// const result = original
//   .map(double)
//   .push(5)
//   .filter(function (v, i) {
//     return v > 2;
//   })
//   .reduce(function(accu, curr) {
//     return accu + curr;
//   })
//
// console.log('%coriginal', 'color: blue; font-weight: bold;', original);
// console.log('%cresult', 'color: red; font-weight: bold;', result);
//
