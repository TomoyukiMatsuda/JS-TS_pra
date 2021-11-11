/**
 * bind
 * 'this'や引数の参照先を変更する。
 * 使用時点で実行はしない（call, applyでは使用と同時に実行する）
 **/

window.name = 'ジョン'

const person = {
  name: 'トム',
  hello: function() {
    console.log('ハロー, ' + this.name)
  }
}
person.hello()

// bind(thisの対象) することでperson.helloの中のthisの参照先を指定している
const helloTom = person.hello.bind(person) // this = person
const helloJohn = person.hello.bind(window) // this = window

function fn(ref) {
  ref()
}

fn(helloTom)
fn(helloJohn)

// bind(thisの参照先, 引数の参照先)
function fn2(name) {
  console.log(name)
}

const fnName = fn2.bind(null, 'ティム')
fnName()


function factory(val, callback) {
  return {
    func(target) {
      const newVal = val + target
      // 引数をbindの第２引数で束縛した新しい関数を生成している。この時点では作成のみで実行していない。
      // そのためちゃんと１秒後に実行される
      setTimeout(callback.bind(null, `${val} + ${target} = ${newVal}`), 1000)
      setTimeout(() => callback(`${val} + ${target} = ${newVal}`), 2000) // これでもok

      // これだとコールバック関数が引数に渡った時点で実行されてしまう。そのため1秒後ではなくすぐに実行される。
      // setTimeoutにはコールバック関数を渡す必要があるものの、この場合には関数の実行結果がsetTimeoutに引数として渡る。
      // つまりconsole.logの場合返り値はvoidのはずなので何も渡ってない？ということになりそう。
      setTimeout(callback(null, `${val} + ${target} = ${newVal}`), 1000)
      val = newVal
    }
  }
}
// 今回の場合はコンソール
factory(10, console.log).func(5)