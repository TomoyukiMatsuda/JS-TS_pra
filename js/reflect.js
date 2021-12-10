class C {
  constructor(a, b) {
    this.a = a
    this.b = b
  }
}

const obj1 = new C(1, 5)
console.log(obj1)

const obj2 = Reflect.construct(C, [1, 2]) // new でインスタンス化していることと同じ
console.log(obj2)

console.log('in:', 'b' in obj1)
console.log('Reflect.has:', Reflect.has(obj1, 'b')) // 機能的には in と同じだが、関数として渡せたりする

console.log('############# Reflect の get #########')

const bob = {
  name: 'ボブ',
  _hello: function () {
    console.log('ハロー', this.name)
  }
}
const tom = {
  name: 'トム',
  _hello: function () {
    console.log('ハロー', this.name)
  },
  get hello() {
    return this._hello()
  }
}
tom.hello
Reflect.get(tom, 'hello') // tom.hello と同じ
Reflect.get(tom, 'hello', bob) // 第３引数（bob）はhelloのthisを束縛する

console.log('######### ProxyとReflect ############')
const targetObj = {
  a: 0,
  get value() {
    return this.a
  }
}
const handler = {
  get: function (target, prop, receiver) {
    console.log(`[get]: ${prop}`)
    if (target.hasOwnProperty(prop)) {
      //return target[prop]
      console.log('receiver:', receiver)
      return Reflect.get(target, prop, receiver) // 第３引数でthisを束縛
    } else {
      return -1
    }
  }
}
const pxy = new Proxy(targetObj, handler)
console.log(pxy.a)
console.log(pxy.b)
console.log(pxy.value)
