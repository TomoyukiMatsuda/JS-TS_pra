function sleep(val) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(val) // 値を出力
      if (val === 3) {
        reject('エラー: val = ' + val)
      } else {
        resolve(++val) // val を渡しつつ resolve を実行する
      }
    }, val * 800)
  })
}

// Promise.allSettled([])
// Promise.race([])

Promise.all([sleep(1), sleep(2), sleep(3), sleep(4)])
  .then((data) => console.log('終了:', data))
  .catch(e => console.log('catch:', e))

// sleep(0)
// .then(function (val) {
//   // thenの返り値をPromiseにすることでpromiseチェーンが可能になる
//   return sleep(val)
// })
// .then(function (val) {
//   return sleep(val)
// })
// .then(function (val) {
//   return sleep(val)
// })
// .then(function (val) {
//   return sleep(val)
// })

// then()の第２引数に関数を設定したときには、catchメソッドのコールバック関数と同じ意味になる
// then(成功時の処理、失敗時の処理）
const prom = new Promise(((resolve, reject) => reject('error')))
prom
.then((data) => {
  console.log('data')
}, (error) => {
  console.log('thenの第２引数をセット' , error)
})