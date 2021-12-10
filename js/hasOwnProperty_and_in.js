function Human(name, job) {
  this.name = name
  this.job = job
}

Object.prototype.hello = function () {
  console.log('Object protorype:', this.name, this.job)
}

const matsu = new Human('まつ', '一応エンジニア')
// hasOwnProperty は自身のプロパティだけを確認する
console.log(matsu.hasOwnProperty('hello')) // false
console.log(matsu.hasOwnProperty('name')) // true
console.log(matsu.hasOwnProperty('job')) // true
// in は自身のプロパティと 親を含めたprototypeまで確認する
console.log('hello' in matsu) // true
console.log('name' in matsu) // true
console.log('job' in matsu) // true
