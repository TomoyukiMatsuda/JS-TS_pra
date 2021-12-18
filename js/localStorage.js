const jsonObj = JSON.stringify({ key: 'value', key2: 'value2' }, null, '\t')

localStorage.setItem('jsonObj', jsonObj)
console.log(localStorage.getItem('jsonObj'))
console.log(JSON.parse(localStorage.getItem('jsonObj')))

// localStorage.clear()