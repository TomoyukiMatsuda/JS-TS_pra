function Parent() {}
function Child() {}

Parent.prototype.parentMethod = function () {
  console.log('親メソッド')
}

// これでプロトタイプ継承が実現できる
Child.prototype = Object.create(Parent.prototype)

const childObj = new Child()
childObj.parentMethod() // 親メソッド

const obj = new function () {}
console.log(obj.__proto__)