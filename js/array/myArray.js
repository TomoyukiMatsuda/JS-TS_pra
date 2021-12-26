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
  myPush(val) {
    //return [...this, val]
    super.push(val)
    // thisを返しているので、破壊的（元のインスタンスの状態を変えてしまう）
    return this;
  }
  myForEach(callbackFn) {
    for (let i = 0; i < this.length; i++) {
      callbackFn(this[i], i, this)
    }
  }
  myMap(callbackFn) {
    const newInstance = new MyArray();
    for (let i = 0; i < this.length; i++) {
      newInstance.push(callbackFn(this[i], i, this))
    }
    // 新しく生成したインスタンスを返しているので元のインスタンスには影響を及ぼさない（破壊的でない）
    return newInstance;
  }
  myFilter(callbackFn) {
    const newInstance = new MyArray()
    for (let i = 0; i < this.length; i++) {
      console.log(this[i], callbackFn(this[i]))
      if (callbackFn(this[i], i, this)) {
        newInstance.push(this[i])
      }
    }
    // 新しく生成したインスタンスを返しているので元のインスタンスには影響を及ぼさない（破壊的でない）
    return newInstance;
  }
  myReduce(callbackFn, accu) {
    //
    // if (accu) {
    //   for (let i = 0; i < this.length; i++) {
    //     accu = callbackFn(accu, this[i])
    //   }
    //
    //   return accu
    // } else {
    //   let accu
    //   for (let i = 0; i < this.length; i++) {
    //     if (accu) {
    //       accu = callbackFn(accu, this[i])
    //     } else {
    //       accu = callbackFn(i, this[i])
    //     }
    //   }
    //
    //   return accu
    // }
    const tmpArry = [...this]
    if (!accu) {
      // 第２引数初期値が存在しなければ、配列の最初の値を返す
      accu = tmpArry.shift();
    }
    for (let i = 0; i < tmpArry.length; i++) {

      accu = callbackFn(accu, tmpArry[i]);
    }
    return accu;
  }
}

function double(v, i, obj) {
  return v * 2;
}
const reducer = (previousValue, currentValue) => previousValue + currentValue;

const original = new MyArray(2, 4, 6, 8);
const result = original
  .myReduce(reducer)
  // .myMap((val) => val * 3)
  // .myFilter((val) => val % 2 === 0)



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
