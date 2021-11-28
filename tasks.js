// マクロタスクに格納されるキュー
// グローバルコンテキストが消滅したあとに処理が実行される
setTimeout(() => {
  //console.log('task1') // 4
})

// マイクロタスクに格納される
new Promise((resolve) => {
  console.log('promise') // 1
  resolve()
})
  .then(() => {
    // こっちもグローバルコンテキストが消失した後に処理が実行される
    // console.log('job1') // 3
  })

console.log('global end') // 2

console.log('#################################3')

new Promise(function promise(resolve) {
  console.log('promise')

  setTimeout(function ts() {
    console.log('task1')
    resolve()
  })

  queueMicrotask(function () {
    console.log('queueMicrotask!!')
  })
}).then(function job1() {
  console.log('job2')

  setTimeout(function ts() {
    console.log('task2')
  })
}).then(function job1() {
    console.log('job3')
  }).then(function job1() {
    console.log('job4')
})

console.log('global end 2')