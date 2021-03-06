const targetObj = { a: 0 }
const handler = {
  set: function (target, prop, value, receiver) {
    console.log('receiver', receiver)
    console.log(`[set]: ${prop}`)
    //throw new Error('set できないオブジェクト')
    target[prop] = value
  },
  get: function (target, prop, receiver) {
    console.log('receiver', receiver)
    console.log(`[get]: ${prop}`)
    if (target.hasOwnProperty(prop)) {
      return target[prop]
    } else {
      // 値が見つからなかったときには、-1を出力
      return -1
    }
  },
  deleteProperty(target, prop) {
    console.log(`[delete]: ${prop}`)
    delete target[prop]
  }
}

const pxy = new Proxy(targetObj, handler)
pxy.a = 1

let aa = pxy.a
console.log(aa)
console.log(pxy.b) // 値が見つからなかったときには、-1を出力

delete pxy.a
console.log(targetObj)