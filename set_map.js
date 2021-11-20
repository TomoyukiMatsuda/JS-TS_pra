console.log('############# Map #################')
const map = new Map()

const key1 = {};
map.set(key1, 'value1')
console.log(map.get(key1))

const key2 = function() {}
map.set(key2, 'value2')
console.log(map.get(key2))

let key3
map.set(key3 = 0, 'value3')
console.log(map.get(key1))

console.log(map)

for (const [k, v] of map) {
  console.log(k, v)
}

console.log('############# Set #################')
const s = new Set()
s.add(key1)
s.add(key1) // 同じ値はセットされない
for(let k of s) {
  console.log(k)
}