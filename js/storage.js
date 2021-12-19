const jsonObj = JSON.stringify({ name: 'local', key: 'value', key2: 'value2', random: Math.ceil(Math.random()*100) }, null, '\t')
const jsonObj2 = JSON.stringify({ name: 'session', key: 'value', key2: 'value2', random: Math.ceil(Math.random()*100) }, null, '\t')

localStorage.setItem('jsonObj', jsonObj)
console.log(localStorage.getItem('jsonObj'))
console.log(JSON.parse(localStorage.getItem('jsonObj')))

// localStorage.clear()

// sessionStorage
sessionStorage.setItem('session', jsonObj2)
console.log(sessionStorage.getItem('session'))
