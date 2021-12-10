function F(a, b) {
  this.a = a
  this.b = b
  // return {a: 1}

  // return {a: 1} は下記3行の省略記法（同じことをやっている）
  // const result = new Object()
  // result.a = 1
  // return result
}
F.prototype.c = function () {}

const ins = new F(1, 2)
// ins instanceof F と ins.__proto__ === F.prototype は同じことを行っている
console.log(ins instanceof F)
console.log(ins.__proto__ === F.prototype) // instanceof は prototype の比較を行っている
