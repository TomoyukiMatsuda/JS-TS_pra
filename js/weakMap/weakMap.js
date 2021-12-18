// うまくimport できない
import {Person} from './person'

// 弱参照のMap
const wm = new WeakMap();

const o = {};
//const o = {key: 'key'};
wm.set(o, 'val1')

console.log(wm.get(o))
console.log(wm.has(o))
console.log(wm.delete(o))
console.log(wm.get(o))

const tim = new Person('tim')
tim.hello()
console.log(tim)