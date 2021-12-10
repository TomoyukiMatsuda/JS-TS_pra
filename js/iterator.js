// イテレータを生成する関数
function genIterator(max = 10) {
  let value = 0

  return {
    next() {
      if (value <= max) {
        return {
          done: false,
          value: value++, // valueを値として設定してから+1を行う
        }
      } else {
        return {
          done: true,
        }
      }
    }
  }
}

const it = genIterator(10)
let a = it.next()
while(!a.done) {
//  console.log(a.value)
  a = it.next()
}

const obj = {
  [Symbol.iterator]: genIterator.bind(null, 50) // bindでgenIteratorの引数maxを指定している
}
for(const i of obj) {
  console.log(i)
}

console.log('############## 反復可能オブジェクト ################')
const items = {
  prop1: 'value1',
  prop2: 'value2',
  prop3: 'value3',
}
// Object.entries(オブジェクト)で[[key, value], [key, value]]の配列が作成される
// const items = Object.entries(obj2)
// console.log(items)
Object.prototype[Symbol.iterator] = function() {
  const keys = Object.keys(this)
  let i = 0
  let _this = this
  return {
    next() {
      let key = keys[i++]
      return {
        value: [key, _this[key]],
        done: i > keys.length,
      }
    }
  }
}
for(let item of items) {
  console.log(item)
}

console.log('############### 練習問題 ###############')
const stepIt = genStep(4, 10, 2)
let stepObj = stepIt.next()

while (!stepObj.done) {
  console.log(stepObj.value) // -> 4, 6, 8, 10
  stepObj = stepIt.next()
}

function genStep(min = 0, max = 20, step = 1) {
  let num = min - step

  return {
    next: () => {
      num += step

      if (num > max) {
        return {done: true}
      } else {
        return {
          done: false,
          value: num,
        }
      }
    }
  }
}
