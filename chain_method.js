class Calculator {
  constructor() {
    this.val = null
    //this.calc = null
    this._operator // 宣言しなくても大丈夫ではある
  }

  set(val) {
    if (this.val === null) {
      this.val = val
    } else {
      // 計算
      // switch (this.calc) {
      //   case 'plus':
      //     this.val += val
      //     break
      //   case 'minus':
      //     this.val -= val
      //     break
      //   case 'multiply':
      //     this.val *= val
      //     break
      //   case 'divide':
      //     this.val /= val
      //     break
      // }

      // ここで指定された _operator の振る舞いを実行する
      this._operator(this.val, val)
    }
    return this
  }

  _equal(result) {
    this.val = result
    console.log(this.val)
  }

  plus() {
    //this.calc = 'plus'
    // _operator の振る舞いをここで指定する
    this._operator = function (val1, val2) {
      const result = val1 + val2
      this._equal(result)
    }
    return this
  }
  minus() {
    // this.calc = 'minus'
    // _operator の振る舞いをここで指定する
    this._operator = function (val1, val2) {
      const result = val1 - val2
      this._equal(result)
    }
    return this
  }
  multiply() {
    // this.calc = 'multiply'
    // _operator の振る舞いをここで指定する
    this._operator = function (val1, val2) {
      const result = val1 * val2
      this._equal(result)
    }
    return this
  }
  divide() {
    // this.calc = 'divide'
    // _operator の振る舞いをここで指定する
    this._operator = function (val1, val2) {
      const result = val1 / val2
      this._equal(result)
    }
    return this
  }
}

const calc = new Calculator()
calc.set(10)
  .plus()
  .set(20)
  .minus()
  .set(5)
  .multiply()
  .set(2)
  .divide()
  .set(5)
