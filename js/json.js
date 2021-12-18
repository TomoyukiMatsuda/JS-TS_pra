const obj = {a: 0, b: 1, c: 2, d: 3}

function replacer(prop, value) {
  console.log('prop:', prop, 'value:', value)
  if (value < 1) {
    return;
  }
  return value;
}

const jsonReplaced = JSON.stringify(obj, replacer)
const jsonArr = JSON.stringify(obj, ['a', 'c'])
console.log(jsonArr)
console.log(jsonReplaced)
