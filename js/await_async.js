function sleep(val) {
  return new Promise((resolve) => {
    setTimeout(function () {
      console.log(val++)
      resolve(val)
    }, 500)
  })
}

async function init() {
  // await を付与することによって、Promise内のresolveの日引数の値がawaitの結果として返される
  let val = await sleep(0)
  val = await sleep(val)
  val = await sleep(val)
  val = await sleep(val)
  val = await sleep(val)
  val = await sleep(val)

  console.log(val)
}
init()

// 上記で同じことが記述できる
// sleep(0)
//   .then((val) => {
//     return sleep(val)
//   })
//   .then((val) => {
//     return sleep(val)
//   })
//   .then((val) => {
//     return sleep(val)
//   })
//   .then((val) => {
//     return sleep(val)
//   })