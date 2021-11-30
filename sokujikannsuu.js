const moduleA = (function () {
  console.log('IIFE 呼ばれたよ')

  let privateVal = 1
  let publicVal = 10

  function publicFn() {
    console.log('publicFn:' , publicVal)
  }

  function privateFn() {

  }

  return {
    publicFn,
    publicVal
  }
})()

moduleA.publicFn()
moduleA.publicFn()
moduleA.publicFn()

console.log(moduleA.publicVal++)
console.log(moduleA.publicVal++)
console.log(moduleA.publicVal++)
moduleA.publicFn()

console.log('########### moduleB ##############')

const moduleB = (function ({publicFn, publicVal}) {
  publicFn()
  publicFn()
  publicFn()

  console.log(publicVal++)
  console.log(publicVal++)
  console.log(publicVal++)
  publicFn()
})(moduleA)