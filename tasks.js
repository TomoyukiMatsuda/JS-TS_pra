// マクロタスクに格納されるキュー
// グローバルコンテキストが消滅したあとに処理が実行される
setTimeout(() => {
  console.log('task1') // 4
})

// マイクロタスクに格納される
new Promise((resolve) => {
  console.log('promise') // 1
  resolve()
})
  .then(() => {
    // こっちもグローバルコンテキストが消失した後に処理が実行される
    console.log('job1') // 3
  })

console.log('global end') // 2