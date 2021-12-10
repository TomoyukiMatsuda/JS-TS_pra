new Promise(function (resolve, reject) {
  console.log('promise')

  setTimeout(function () {
    resolve(1)
  }, 2000)
})
.then( data =>{
  console.log('then1: ' + data++)
  return data
})
.then(data => {
  console.log('then2: ' + data++)
  // throw new Error('then2 でエラー')
  return data
})
.then(data => {
  console.log('then3: ' + data++)
})
.catch(error => {
  console.log('catch:', error)
})
.finally(() => console.log('finally'))

console.log('######### global end ###########')