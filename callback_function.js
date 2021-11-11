const person = {
  name: 'トム',
  hello: function() {
    return "ハロー, " + this.name
  }
}
setTimeout(() => {
  //alert(person.hello())
  console.log(person.hello())
}, 2000)

// 'ハロー'と'ヘイ'どちらが表示されるか？
const obj = {}
obj.greeting = function() {
  console.log("ハロー")
}
function after1s(callback) {
  setTimeout(callback, 1000)
}
// この時点でオブジェクトの参照先が渡ってくるため
after1s(obj.greeting)
// このタイミングで関数の内容を書き換えたとしても実行結果は'ヘイ'に変更される訳ではなく、'ハロー'が実行される
obj.greeting = function() {
  console.log("ヘイ")
}

// 第２引数のコールバック関数に渡す関数により処理を切り替える
function func(val, callback) {
  return {
    fn: function() {
      callback(val)
    }
  }
}
const a = func('コンソール', console.log)
a.fn()
const b = func('アラート', alert)
b.fn()

// クロージャーで引数を固定する？
function hello(name) {
  return function() {
    console.log('ハロー ' + name)
  }
}

setTimeout(hello('トム'), 1000)
hello('松田')()