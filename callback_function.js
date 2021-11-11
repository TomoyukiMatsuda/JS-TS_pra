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
